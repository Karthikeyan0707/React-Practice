import { createRandomMovie } from "../data/indexData";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/indexStore";

function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const dispatch = useDispatch();
  //   const moviePlaylist = [];
  const moviePlaylist = useSelector((state) => {
    // console.log(state);
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    // console.log(action);
    dispatch(action);
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
