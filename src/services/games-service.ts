import create from "./http-service";

export interface Game {
  id: number;
  name: string;
  genre: string;
  background_image: string;
}

export interface Games {
  results: Game[];
}

export default create("/games?key=ebfc9ab6165a4b11ae3152d3104a6c74");
