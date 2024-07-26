import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();


  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
);

  const getNowPlayingMovies = async () => {
    try {
    const data = await fetch(NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    } catch (error){
      console.error("Failed to fetch now playing movies:", error);
    }

  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
