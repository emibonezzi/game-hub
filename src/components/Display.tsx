import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Game } from "../services/games-service";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gamesList: Game[];
}

const Display = ({ gamesList }: Props) => {
  const { platformsList, platformError } = usePlatforms();

  return (
    <div>
      <Flex flexDirection="column" gap={2} mb={10}>
        <Heading size="2xl" marginBottom="10px">
          Games
        </Heading>
        <HStack maxW="fit-content">
          {platformError && <p>{platformError}</p>}
          <Select>
            {platformsList.map((p) => {
              return <option key={p.id}>{p.name}</option>;
            })}
          </Select>
        </HStack>
      </Flex>
      <Flex flexDirection="row" gap={3} flexWrap="wrap">
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
