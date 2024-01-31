import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { Genre } from "../services/genre-service";
import gamesService, { Game, Games } from "../services/games-service";

const useGames = () => {
  const [listOfGames, setListOfGames] = useState(<Game[]>[]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gamesService.getAll<Games>();

    request
      .then((res) => {
        console.log(res.data);
        setListOfGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return { listOfGames, setListOfGames, error };
};

export default useGames;
