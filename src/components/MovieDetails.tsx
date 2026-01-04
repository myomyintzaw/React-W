import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


interface Movie {
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  actors: string[];
  actresses: string[];
  director: string;
  release_date: string;
  runtime: number;
}


const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = id ? parseInt(id) : 0;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const CREDITS_API = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  const TRAILER_API = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  console.log(movie);
  
  useEffect(() => {
    setLoading(true);
    fetchMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);


  
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get<Movie>(API_URL);
      // console.log('response', response)
      const creditsResponse = await axios.get<{
        cast: {
          name: string;
          character?: string;
          known_for_department?: string;
        }[];
      }>(CREDITS_API);
      const trailerResponse = await axios.get<{
        results: { key: string; type: string }[];
      }>(TRAILER_API);
      console.log("trailerResponse", trailerResponse.data.results);
      // console.log('creditsResponse', creditsResponse)


      if (response.data && creditsResponse.data) {
        const actors = creditsResponse.data.cast
          .filter((cast) => cast.known_for_department?.includes("Acting"))
          .map((cast) => cast.name);
        const actresses = creditsResponse.data.cast
          .filter((cast) => cast.known_for_department?.includes("Acting"))
          .map((cast) => cast.name);

        const director =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (creditsResponse.data as any).crew?.find(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (crew: any) => crew.job === "Director"
          )?.name || "Unknown";
        setMovie({
          ...response.data, // movieApi Data
          actors,
          actresses,
          director,
        });
      } else {
        setMovie(null);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setMovie(null); // Ensure movie is set to null if fetch fails
    } finally {
      setLoading(false); // Always set loading to false after the operation
    }
  };



  
  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;
  return (
    <div className="p-10 ">
      <h1 className="text-4xl text-slate-600 font-bold">{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/200"
        }
        alt={movie.title}
        className="w-[200px] object-cover object-center"
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <h2 className="text-2xl text-slate-600 font-bold">Cast</h2>
      <div>
        <h1>Actors:</h1>
        <ul>
          {movie.actors.slice(0, 2).map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
        <h1>Actresses:</h1>
        <ul>
          {movie.actresses.length > 0 &&
            movie.actresses
              .slice(0, 2)
              .map((actress, index) => <li key={index}>{actress}</li>)}
        </ul>
      </div>
      <p>Director: {movie.director}</p>
    </div>
  );
};
export default MovieDetails;
