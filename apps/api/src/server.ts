import express, { type Application } from "express";
import cors from "cors";
import session from "express-session";
import passport from "@/auth/passport";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import morgan from "morgan";

import routes from "./routes";
import { env } from "./config/env";
import { errorHandler } from "./errors/errorHandler";

const app: Application = express();

/*
| Trust Proxy

| Required when deploying behind reverse proxy (nginx, vercel, railway, etc.)
| Ensures secure cookies work correctly in production
*/
app.set("trust proxy", 1);

/*
| Security Headers

| Adds HTTP security headers to protect against:
| XSS, clickjacking, MIME sniffing, etc.
*/
app.use(helmet());

/*
| Compression

| Compresses HTTP responses (gzip) to improve performance
*/
app.use(compression());

/*
| Request Logging

| Logs incoming requests (method, url, status)
| Useful for debugging and monitoring
*/
app.use(morgan("dev"));

/*
| Body Parsers

| Parses incoming request body
| Limit size to prevent large payload abuse
*/
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

/*
| CORS Configuration

| Allows frontend to communicate with backend
| credentials:true required for cookies (session auth)
*/
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

/*
| Rate Limiting

| Prevents abuse (bruteforce, spam, DDOS small scale)
| Limits number of requests per IP
*/
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max requests per IP
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

/*
| Session Configuration

| Required for Passport Google OAuth
| Stores user session securely in cookies
*/
app.use(
  session({
    secret: env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // prevents JS access to cookie
      secure: env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "lax", // protects against CSRF
    },
  }),
);

/*
| Passport Authentication

| Initializes passport and connects it with session
*/
app.use(passport.initialize());
app.use(passport.session());

/*
| API Routes

| All application routes prefixed with /api
*/
app.use("/api", routes);

/*
| Global Error Handler

| Handles all thrown errors in one place
*/
app.use(errorHandler);


const PORT = env.PORT;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();