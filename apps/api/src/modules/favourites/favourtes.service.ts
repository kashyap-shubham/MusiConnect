import { FavouriteRepository } from "./favourites.repository";
import { ToggleFavouriteInput } from "./schemas/toggle-favourite.scheam";



export class favouriteService {

    private favouriteReposiotry: FavouriteRepository;


    constructor() {
        this.favouriteReposiotry = new FavouriteRepository();
    }


    async toggleFavourites(userId: string, input: ToggleFavouriteInput) {

        const existing = await this.favouriteReposiotry.findOne(
            userId,
            input.entityId,
            input.entityType
        );

        if (existing) {
            await this.favouriteReposiotry.delete(existing.id);
            return {
                isFavourite: false
            }
        }

        await this.favouriteReposiotry.create({
            ...input,
            userId
        });

        return {
            isFavourite: true
        };
    }


    async getLikedSongs(userId: string) {
        return this.favouriteReposiotry.findLikedSongs(userId);
    }

    
}