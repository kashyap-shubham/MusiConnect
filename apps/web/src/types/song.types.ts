export interface Album {
  id: string
  title: string
  coverImageKey: string | null
  releaseDate: string
  artistId: string
  createdAt: string
}

export interface Song {
  id: string
  title: string
  duration: number
  audioKey: string
  albumId: string
  createdAt: string
  album: Album
  artists: any[]
}

export interface ApiResponse<T> {
  success: boolean
  data: T
}