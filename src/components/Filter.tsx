import {
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

interface Props {
  onSelectedGenre: (id: number) => void;
}

const Filter = ({ onSelectedGenre }: Props) => {
  const { listOfGenres, setListOfGenres, error, setError } = useGenres();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <Flex flexDirection="column" gap={4}>
        <Heading size="lg">Genres</Heading>
        <List spacing={3}>
          {listOfGenres.map((genre) => {
            return (
              <ListItem key={genre.id}>
                <ListIcon /> {genre.name}
                <Button
                  onClick={() => onSelectedGenre(genre.id)}
                  colorScheme="blue"
                >
                  Button
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Flex>
    </>
  );
};

export default Filter;
