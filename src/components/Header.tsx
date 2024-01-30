import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Switch,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { MdGames } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <Flex gap="3" alignItems="center">
        <MdGames size={50} />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search games..." />
        </InputGroup>
        <Stack align="center" direction="row">
          <Switch size="md" />
          <Box w="8ch">Dark Mode</Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Header;
