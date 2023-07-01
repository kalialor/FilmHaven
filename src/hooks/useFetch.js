import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`


    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url]);
      

  return { data }
}





/*
so movie/now_playing, movie/popular, movie/top_rated, movie/upcoming
is the api path. api path is what makes the url unique. 
see AllRoutes.js 
in that file, we created property for it so we can use it as a prop.

we also use apiPath as a prop in MovieList.js

in const url, we created a variable that holds the url to our api.

DON'T FORGET TO add api key to .env and add it to .gitignore file.
in .env file, we created a variable called: REACT_APP_API_KEY and
added it to the url
*/