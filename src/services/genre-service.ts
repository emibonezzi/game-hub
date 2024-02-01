import create from "./http-service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Genres {
  results: Genre[];
}

export default create(`/genres?key=${import.meta.env.VITE_API_KEY}`);
