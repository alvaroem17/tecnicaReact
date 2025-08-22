import { useState } from "react";
import MovieCards from "../components/MovieCards";
import { useFetch } from "../hooks/useFetchPopular";
import { getMovies } from "../services/movies.service";

export const Home = () => {
  const [page, setPage] = useState(1);
  
  const { response, loading, error } = useFetch(getMovies, page);


  if (error) return <p>Error al cargar las películas</p>; 
  if (loading || !response) return <p>Cargando...</p>;

  return (
    <>
      <div className="py-4">
        <h1 className="text-center pt-4">Películas Populares</h1>
        <MovieCards movies={response} />
        <div className="flex justify-center gap-4 my-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Anterior
          </button>
          <span className="px-4 py-2">Página {page}</span>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => setPage(prev => prev + 1)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
