import express, { type Application } from "express";
import routes from "./routes";
import { env } from "./config/env";
import songRoutes from "./modules/songs/song.routes"
import artistRoutes from "./modules/artists/artist.routes"

const app: Application = express();

app.use(express.json());

app.use("/api", routes);
app.use("/api/songs", songRoutes);
app.use("/api/artists", artistRoutes);

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});