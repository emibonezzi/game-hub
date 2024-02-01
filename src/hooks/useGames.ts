import { useEffect, useState } from "react";
import gamesService, { Game, Games } from "../services/games-service";

const useGames = () => {
  const [listOfGames, setListOfGames] = useState(<Game[]>[]);
  const [gameError, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gamesService.getAll<Games>();

    request
      .then((res) => {
        console.log(res.data);
        setListOfGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { listOfGames, setListOfGames, gameError, isLoading, setIsLoading };
};

export default useGames;
