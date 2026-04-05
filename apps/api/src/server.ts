import express, { type Application } from "express";
import routes from "./routes";
import { env } from "./config/env";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";
import session from "express-session";
import passport from "@/auth/passport";


const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(session({
  secret: env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // todo: true in production
    sameSite: "lax",
  },
}));

app.use(passport.initialize());
app.use(passport.session());


app.use("/api", routes);

app.use(errorHandler);

const PORT = env.PORT;


async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
  });
}

startServer();