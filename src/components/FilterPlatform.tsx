import { HStack, Select } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

interface PlatformDetail {
  id: string;
  name: string;
}

interface Props {
  listOfPlatforms: PlatformDetail[];
  onSelectedPlatform: (platform: string) => void;
}

const FilterPlatform = ({ listOfPlatforms, onSelectedPlatform }: Props) => {
  return (
    <div>
      <HStack maxW="fit-content">
        <Select
          onChange={(e) => {
            onSelectedPlatform(e.target.value);
          }}
        >
          {listOfPlatforms.map((p) => {
            return (
              <option
                selected={p.name === "Xbox" ? true : false}
                value={p.name}
                key={p.id}
              >
                {p.name}
              </option>
            );
          })}
        </Select>
      </HStack>
    </div>
  );
};

export default FilterPlatform;
