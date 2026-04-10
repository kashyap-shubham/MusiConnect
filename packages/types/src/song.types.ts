export interface SongDTO {
    id: string;
    title: string;
    artistId: string;
    artistName?: string;
    albumId?: string | null;
    albumTitle?: string;
    duration: number;
    imageUrl: string;
    audioUrl: string;
    createdAt: string;
    updatedAt: string;
}