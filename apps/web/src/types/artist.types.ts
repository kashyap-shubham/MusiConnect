export interface Artist {
  id: string
  name: string
  image?: string | null
  createdAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
}