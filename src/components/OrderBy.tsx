import { HStack, Select } from "@chakra-ui/react";

const orderFilters = [
  { id: 1, order_name: "Relevance", order_slug: "" },
  { id: 2, order_name: "Date added", order_slug: "added" },
  { id: 3, order_name: "Name", order_slug: "name" },
  { id: 4, order_name: "Release Date", order_slug: "released" },
  { id: 5, order_name: "Popularity", order_slug: "" },
  { id: 6, order_name: "Average rating", order_slug: "metacritic" },
];

interface Props {
  onSelectedOrder: (order: string) => void;
}

const OrderBy = ({ onSelectedOrder }: Props) => {
  return (
    <div>
      <HStack maxW="fit-content">
        <Select
          onChange={(e) => {
            onSelectedOrder(e.target.value);
          }}
        >
          {orderFilters.map((o) => {
            return (
              <option
                selected={o.order_slug === "metacritic" ? true : false}
                value={o.order_slug}
                key={o.id}
              >
                Order by: {o.order_name}
              </option>
            );
          })}
        </Select>
      </HStack>
    </div>
  );
};

export default OrderBy;
