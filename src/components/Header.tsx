import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Switch,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { MdGames } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Switch onChange={() => toggleColorMode()} size="md" />{" "}
          <Box w="10ch">{colorMode === "light" ? "Dark" : "Light"} Mode</Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Header;
