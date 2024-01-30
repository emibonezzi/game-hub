import { Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { Game } from "../services/games-service";

interface Props {
  gamesList: Game[];
}

const Display = ({ gamesList }: Props) => {
  return (
    <div>
      <Heading size="2xl" marginBottom="10px">
        Games
      </Heading>
      <Flex flexDirection="row" gap={5} flexWrap="wrap">
        {gamesList.map((game) => {
          return (
            <Card key={game.id}>
              <CardBody>{game.name}</CardBody>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};

export default Display;
