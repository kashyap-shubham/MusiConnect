export interface SongDTo {
    id: string;
    title: string;
    artistId: string;
    albumId?: string | null;
    duration: number;
    imageUrl: string;
    audioUrl: string;
    createAt: string;
    updatedAt: string;
}