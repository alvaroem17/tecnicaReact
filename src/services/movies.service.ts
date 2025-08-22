import { api } from './config';
import type { Movie, MovieDetails, MovieResponse } from '../types';

export const getMovies = async (page: number = 1):Promise<Movie[] | undefined> => {
  try {
    const { data } = await api.get<MovieResponse>(`popular?language=es-ES&page=${page}`);
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return 
  }
}

export const getMovieDetails = async (id: string):Promise<MovieDetails | undefined> => {
  try {
    const { data } = await api.get<MovieDetails>(`${id}?language=es-ES`);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return 
  }
}