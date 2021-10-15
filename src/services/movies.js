import fench from "./fench";

function popular() {
  return fench(`movie/popular`);
}

const movies = { popular };

export default movies;
