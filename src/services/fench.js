export default function fench(endpoint, options) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=51530e9ac50c0ed2a588fbf229874c11`
    )
      .then((result) => {
        if (!result.ok) {
          reject(result.status);
        }
        return result.json();
      })
      .then(resolve);
  });
}
