import { Card, CardBody, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../services/games-service";

interface Props {
  gamesList: Game[];
  loading: boolean;
}

const Display = ({ gamesList, loading }: Props) => {
  return (
    <div>
      <Flex flexDirection="row" gap={3} flexWrap="wrap">
        {loading && <Heading size={"2xl"}>LOADING</Heading>}
        {gamesList.map((game) => {
          return (
            <Card key={game.id} maxW="xs">
              <CardBody>
                <Image src={game.background_image}></Image>
                <Stack mt="6" spacing="3">
                  <Flex>
                    {game.parent_platforms.map((p) => {
                      return (
                        <Heading key={p.platform.id} size="xs">
                          {p.platform.slug}
                        </Heading>
                      );
                    })}
                  </Flex>
                  <Heading size="lg"> {game.name}</Heading>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};

export default Display;
