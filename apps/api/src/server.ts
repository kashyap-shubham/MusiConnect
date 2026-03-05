import express, { type Application } from "express";
import routes from "./routes";
import { env } from "./config/env";
import songRoutes from "./modules/songs/song.routes"


const app: Application = express();

app.use(express.json());

app.use("/api", routes);
app.use("/api/songs", songRoutes);

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});