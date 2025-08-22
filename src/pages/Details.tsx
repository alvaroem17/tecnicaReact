import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetchPopular';
import { getMovieDetails } from '../services/movies.service';

export const Details = () => {
  const { id } = useParams();
  const { response, loading, error } = useFetch(getMovieDetails, id);
  
  return <>
    {error && <p className="p-4 w-screen flex flex-col items-center">Error al cargar los detalles de la película</p>}
    {loading && <p className="p-4 w-screen flex flex-col items-center">Cargando...</p>}
    {response && (
      <div className="p-4 w-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">{response.title}</h1>
        <div className="flex flex-col md:flex-row gap-4 w-1/2">
          <img 
            src={`https://image.tmdb.org/t/p/w500${response.poster_path}`} 
            alt={response.title} 
            style={{ width: '300px', height: '450px' }}
          />
          <div>
            <h2 className="text-xl font-bold mb-2">Descripción</h2>
            <p className="mb-4">{response.overview}</p>
            <h3 className="text-lg font-bold mb-2">Detalles</h3>
            <ul className="list-disc list-inside">
              <li><strong>Fecha de lanzamiento:</strong> {response.release_date}</li>
              <li><strong>Calificación:</strong> {response.vote_average} / 10</li>
              <li><strong>Votos:</strong> {response.vote_count}</li>
              <li><strong>Idioma original:</strong> {response.original_language}</li>
              <li><strong>Popularidad:</strong> {response.popularity}</li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </>
}
