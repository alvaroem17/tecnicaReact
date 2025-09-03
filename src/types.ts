// Define interfaces for authentication data
export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean
  request_token: string
  expires_at: string;
}
// Define interfaces for movie data
export interface MovieResponse{
  results: Movie[];
  page: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
}

export interface MovieDetails extends Movie {
  vote_average: number;
  vote_count: number;
  original_language: string;
}


// Example of a generic interface
export interface Test<T,B> {
  id: T;
  callback: (param: B) => T;
}