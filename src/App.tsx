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
import OrderBy from "./components/OrderBy";

const App = () => {
  const [selectedPlatform, setSelectedPlatform] = useState();
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [selectedOrder, setSelectedOrder] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const { listOfGames, gameError, isLoading } = useGames();
  const { listOfGenres, genreError } = useGenres();
  const { platformsList, platformError } = usePlatforms();

  const filteredList = selectedGenre
    ? listOfGames.filter((game) => {
        for (let genre of game.genres) {
          if (genre.id === selectedGenre.id) {
            return game;
          }
        }
      })
    : listOfGames;

  const filteredByPlatform = selectedPlatform
    ? filteredList.filter((game) => {
        for (let p of game.parent_platforms) {
          if (p.platform.name === selectedPlatform) {
            return game;
          }
        }
      })
    : filteredList;

  const orderedBy = selectedOrder
    ? filteredByPlatform.sort((a, b) => {
        if (a[selectedOrder] > b[selectedOrder]) {
          return -1;
        } else if (b[selectedOrder] < a[selectedOrder]) {
          return 1;
        }

        return 0;
      })
    : filteredByPlatform;

  const filterBySearch = searchTerm
    ? orderedBy.filter((game) => {
        let regex = new RegExp(searchTerm, "g");
        if (regex.test(game.name.toLowerCase())) {
          return game;
        }
      })
    : orderedBy;

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
        <Header onSearch={(term) => setSearchTerm(term)} />
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
            {selectedPlatform ? selectedPlatform : " "}{" "}
            {selectedGenre ? selectedGenre.name + " Games" : "Games"}
          </Heading>
          {platformError && <p>{platformError}</p>}
          <Flex>
            <FilterPlatform
              listOfPlatforms={platformsList}
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            ></FilterPlatform>
            <OrderBy
              onSelectedOrder={(order) => setSelectedOrder(order)}
            ></OrderBy>
          </Flex>
        </Flex>
        <Display gamesList={filterBySearch} loading={isLoading} />
      </GridItem>
    </Grid>
  );
};

export default App;
