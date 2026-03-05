import express, { type Application } from "express";
import routes from "./routes";
import { env } from "./config/env";


const app: Application = express();

app.use(express.json());

app.use("/api", routes);

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});