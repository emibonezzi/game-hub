import create from "./http-service";

export default create(
  `/platforms/lists/parents?key=${
    import.meta.env.VITE_API_KEY
  }&page_size=1000000000000000`
);
