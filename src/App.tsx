import { Container, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Display from "./components/Display";

const App = () => {
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
        <Filter />
      </GridItem>
      <GridItem area={"main"}>
        <Display />
      </GridItem>
    </Grid>
  );
};

export default App;
