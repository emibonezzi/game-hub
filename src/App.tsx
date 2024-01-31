import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Display from "./components/Display";
import { useState } from "react";
import { Games } from "./services/games-service";
import useGames from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(0);
  const { listOfGames, error } = useGames();

  const filteredList =
    selectedGenre != 0
      ? listOfGames.filter((game) => {
          for (let genre of game.genres) {
            if (genre.id === selectedGenre) {
              return game;
            }
          }
        })
      : listOfGames;

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav main"`}
      gridTemplateRows={"70px 1fr"}
      gridTemplateColumns={"250px 1fr"}
      p={5}
      gap={5}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <Filter onSelectedGenre={(id) => setSelectedGenre(id)} />
      </GridItem>
      <GridItem area={"main"}>
        {error && <p>{error}</p>}
        <Display gamesList={filteredList} />
      </GridItem>
    </Grid>
  );
};

export default App;
