import { useEffect, useState } from "react";
import genreService, { Genre, Genres } from "../services/genre-service";
import { CanceledError } from "axios";

const useGenres = () => {
  const [listOfGenres, setListOfGenres] = useState(<Genre[]>[]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = genreService.getAll<Genres>();

    request
      .then((res) => {
        setListOfGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return { error, setError, listOfGenres, setListOfGenres };
};

export default useGenres;
