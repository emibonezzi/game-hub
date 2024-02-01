import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Display from "./components/Display";
import { useState } from "react";
import useGames from "./hooks/useGames";
import { Genre } from "./services/genre-service";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatforms";
import FilterPlatform from "./components/FilterPlatform";

const App = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const { listOfGames, gameError, isLoading } = useGames();
  const { listOfGenres, genreError } = useGenres();
  const { platformsList, platformError } = usePlatforms();

  const filteredByPlatform = selectedPlatform
    ? listOfGames.filter((game) => {
        for (let p of game.parent_platforms) {
          if (p.platform.name === selectedPlatform) {
            return game;
          }
        }
      })
    : listOfGames;

  const filteredList = selectedGenre
    ? listOfGames.filter((game) => {
        for (let genre of game.genres) {
          if (genre.id === selectedGenre.id) {
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
        {genreError && <p className="text-danger">{genreError}</p>}
        <Filter
          genreList={listOfGenres}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={"main"}>
        {gameError && <p>{gameError}</p>}
        <Flex flexDirection="column" gap={2} mb={10}>
          <Heading size="2xl" marginBottom="10px">
            {selectedGenre ? selectedGenre.name : "Games"}
          </Heading>
          <FilterPlatform
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          ></FilterPlatform>
        </Flex>
        <Display gamesList={filteredList} loading={isLoading} />
      </GridItem>
    </Grid>
  );
};

export default App;
