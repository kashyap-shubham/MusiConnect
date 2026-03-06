import express, { type Application } from "express";
import routes from "./routes";
import { env } from "./config/env";
import cors from "cors";



const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", routes);

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});