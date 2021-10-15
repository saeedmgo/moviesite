import { useEffect, useState } from "react";

export default function useMovieDb(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `
      https://api.themoviedb.org/3/${endpoint}?api_key=51530e9ac50c0ed2a588fbf229874c11&language=en-US&page=1
      `
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => {
        setLoading(false);
        console.log(data);
      });
  }, [endpoint]);

  return { data, loading };
}
