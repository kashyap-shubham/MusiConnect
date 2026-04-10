export interface AlbumDTO {
    id: string;
    title: string;
    artistId: string;
    imageUrl: string;
    releaseYear?: number;
    createdAt: string;
    updatedAt: string;
}