import {
  Badge,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../services/games-service";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

interface Props {
  gamesList: Game[];
  loading: boolean;
}

const Display = ({ gamesList, loading }: Props) => {
  return (
    <div>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap={1} p={10}>
        {loading && <Heading size={"2xl"}>LOADING</Heading>}
        {gamesList.map((game) => {
          return (
            <GridItem key={game.id} w="100%">
              <Card maxW="xs">
                <CardBody>
                  <Image objectFit="cover" src={game.background_image}></Image>
                  <Stack maxW="100%" mt="6" spacing="3">
                    <Flex justifyContent={"space-between"} flexWrap="wrap">
                      <Flex gap={1}>
                        {game.parent_platforms.map((p) => {
                          return (
                            <Icon
                              key={p.platform.id}
                              color="grey"
                              width="20px"
                              icon={`bi:${p.platform.slug}`}
                            ></Icon>
                          );
                        })}
                      </Flex>
                      <Badge fontSize="md" colorScheme="green">
                        {game.metacritic}
                      </Badge>
                    </Flex>
                    <Heading size="lg"> {game.name}</Heading>
                    {/*                   <Heading size="sm">
                    {game.genres.map((g) => {
                      return <Heading size="xs">{g.name}</Heading>;
                    })}
                  </Heading> */}
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Display;
