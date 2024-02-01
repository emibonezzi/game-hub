import { Button, Flex, Heading, Image, List } from "@chakra-ui/react";
import { Genre } from "../services/genre-service";

interface Props {
  genreList: Genre[];
  onSelectedGenre: (genre: Genre) => void;
}

const Filter = ({ genreList, onSelectedGenre }: Props) => {
  return (
    <>
      <Flex flexDirection="column" gap={4}>
        <Heading size="lg">Genres</Heading>
        <List spacing={3}>
          {genreList.map((genre) => {
            return (
              <Flex alignItems="center" key={genre.id}>
                <Image
                  src={genre.image_background}
                  boxSize="35px"
                  borderRadius="full"
                />
                <Button onClick={() => onSelectedGenre(genre)} bg="none">
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
