import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=65178ab71cb23431f03dfb05fde24b97`


    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          console.log("response", response);
          const json = await response.json();
          console.log("json", json);
          setData(json.results);
        }
        fetchMovies();
      }, [url]);
      

  return { data }
}
