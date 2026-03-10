import { prisma } from "@/lib/prisma";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName;
        const image = profile.photos?.[0]?.value;

        if (!email) {
          return done(new Error("No email found from Google"), undefined);
        }

        let user = await prisma.user.findUnique({
          where: { googleId },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              googleId,
              email,
              name,
              image,
            },
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, undefined);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;