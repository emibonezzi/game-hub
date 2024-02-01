import { Genre } from "./genre-service";
import create from "./http-service";

export interface GamePlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: GamePlatform[];
  metacritic: number;
  added: number;
  released: string;
}

export interface Games {
  results: Game[];
}

export default create(
  "/games?key=ebfc9ab6165a4b11ae3152d3104a6c74&page_size=1000000000000000"
);
