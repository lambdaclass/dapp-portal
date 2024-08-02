import type { Token } from "@/types";

export const ETH_TOKEN: Token = {
  // WARNING THIS HAS TO BE CHECKED
  address: "Not defined, it varies depending if the chain has an ERC20 as base token",
  l1Address: "0x0000000000000000000000000000000000000000",
  symbol: "ETH",
  name: "Ether",
  decimals: 18,
  iconUrl: "/img/eth.svg",
};
