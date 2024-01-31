import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

interface Props {
  onSelectedGenre: (id: number) => void;
}

const Filter = ({ onSelectedGenre }: Props) => {
  const { listOfGenres, error } = useGenres();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <Flex flexDirection="column" gap={4}>
        <Heading size="lg">Genres</Heading>
        <List spacing={3}>
          {listOfGenres.map((genre) => {
            return (
              <Flex alignItems="center" key={genre.id}>
                <Image
                  src={genre.image_background}
                  boxSize="35px"
                  borderRadius="full"
                />
                <Button onClick={() => onSelectedGenre(genre.id)} bg="none">
                  {genre.name}
                </Button>
              </Flex>
            );
          })}
        </List>
      </Flex>
    </>
  );
};

export default Filter;
