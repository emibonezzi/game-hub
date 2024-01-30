import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  VStack,
} from "@chakra-ui/react";

const Filter = () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <Heading size="lg">Genres</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon /> Action
        </ListItem>
        <ListItem>
          <ListIcon /> Adventure
        </ListItem>
        <ListItem>
          <ListIcon /> Indie
        </ListItem>
        <ListItem>
          <ListIcon /> RPG
        </ListItem>
        <ListItem>
          <ListIcon /> Action
        </ListItem>
        <ListItem>
          <ListIcon /> Action
        </ListItem>
        <ListItem>
          <ListIcon /> Action
        </ListItem>
        <ListItem>
          <ListIcon /> Action
        </ListItem>
      </List>
    </Flex>
  );
};

export default Filter;
