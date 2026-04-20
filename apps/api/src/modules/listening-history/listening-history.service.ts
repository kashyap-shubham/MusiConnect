import { ListeningHistoryRepository } from "./listening-history.repository";
import { trackPlayInput } from "./schemas/track-play.schema";



export class ListeningHistoryService {

    private ListeningHistoryRepository: ListeningHistoryRepository;

    constructor() {
        this.ListeningHistoryRepository = new ListeningHistoryRepository();
    }


    async trackPlay(userId: string, input: trackPlayInput) {

        if (input.durationPlayed && input.durationPlayed < 10) {
            return;
        }

        return this.ListeningHistoryRepository.create({userId, ...input});
    };


    async getRecentSongs(userId: string) {
        return this.ListeningHistoryRepository.getRecentByUser(userId);
    };
}