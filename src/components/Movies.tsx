/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import {
  // Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  GridLegacy,
  TextField,
} from "@mui/material";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
}

interface MovieResponse {
  results: Movie[];
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // console.log("movies", movies);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  // const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;
  // const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;


  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchMoies(API_URL);
  }, []);

  const fetchMoies = async (url: string) => {
    try {
      const response = await axios.get<MovieResponse>(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching moves:", error);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      fetchMoies(SEARCH_API + searchTerm);
    } else {
      fetchMoies(API_URL);
    }
  };

  return (
    // <Container sx={{ py: 8 }} maxWidth="lg">
    // <Container maxWidth="lg" sx={{ paddingTop: 8, paddingBottom: 8 }}>

    <Container maxWidth="xl" sx={{ py: 8 }}>
      <form onSubmit={handleSearch} style={{ margin: "2rem 0" }}>
        <TextField
          fullWidth
          label="Search for movies"
          variant="outlined"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        ></TextField>
      </form>
      

      <GridLegacy container spacing={3}>
        {movies.map((movie: Movie) => (
          <GridLegacy xs={12} sm={6} md={3} key={movie.id}>
            <Card sx={{ height: "100%" }}>
              <Link to={`/movies/${movie.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height: "350px", objectFit: "contain" }}
                  image={
                    movie.poster_path
                      ? IMG_PATH + movie.poster_path
                      : "https://via.placeholder.com/200"
                  }
                  alt={movie.title}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.overview.slice(0, 150)}...
                </Typography>
                <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                  Rating: {movie.vote_average}
                </Typography>
              </CardContent>
            </Card>
          </GridLegacy>
        ))}
      </GridLegacy>
    </Container>
  );
};

export default Movies;
