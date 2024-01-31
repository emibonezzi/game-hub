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
import FilterPlatform from "./FilterPlatform";
import { useState } from "react";

interface Props {
  gamesList: Game[];
}

const Display = ({ gamesList }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const filteredByPlatform = selectedPlatform
    ? gamesList.filter((game) => {
        for (let p of game.parent_platforms) {
          if (p.platform.name === selectedPlatform) {
            return game;
          }
        }
      })
    : gamesList;

  return (
    <div>
      <Flex flexDirection="column" gap={2} mb={10}>
        <Heading size="2xl" marginBottom="10px">
          Games
        </Heading>
        <FilterPlatform
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        ></FilterPlatform>
      </Flex>
      <Flex flexDirection="row" gap={3} flexWrap="wrap">
        {filteredByPlatform.map((game) => {
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
