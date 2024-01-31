import { HStack, Select } from "@chakra-ui/react";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: string) => void;
}

const FilterPlatform = ({ onSelectedPlatform }: Props) => {
  const { platformsList, platformError } = usePlatforms();

  return (
    <div>
      <HStack maxW="fit-content">
        {platformError && <p>{platformError}</p>}
        <Select
          onChange={(e) => {
            console.log(e.target.value);
            onSelectedPlatform(e.target.value);
          }}
        >
          {platformsList.map((p) => {
            return <option key={p.id}>{p.name}</option>;
          })}
        </Select>
      </HStack>
    </div>
  );
};

export default FilterPlatform;