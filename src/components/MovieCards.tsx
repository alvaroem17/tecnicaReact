import { useNavigate } from 'react-router-dom';
import type { Movie } from '../types'

const MovieCards = ({ movies }: { movies: Movie[] }) => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex gap-4 flex-wrap flex-row justify-center">
      {movies.map(movie => (
        <div key={movie.id} className="w-1/5 h-96 p-4 border rounded-lg shadow-lg flex flex-col gap-2 hover:scale-105 transition-transform"
        onClick={() => navigate(`/${movie.id}`)}>
          <div className="flex flex-col xl:flex-row gap-2">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '150px', height: '225px' }}
            />
            <h2 className="font-bold text-lg line-clamp-4">{movie.title}</h2>
          </div>
          
          <p className="line line-clamp-2">{movie.overview}</p>
        </div>
      ))}
    </section>
  )
}

export default MovieCards