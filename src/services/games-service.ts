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
  `/games?key=${import.meta.env.VITE_API_KEY}&page_size=1000000000000000`
);
