import create from "./http-service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Genres {
  results: Genre[];
}

export default create("/genres?key=ebfc9ab6165a4b11ae3152d3104a6c74");
