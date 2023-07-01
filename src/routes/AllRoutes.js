import { Routes, Route } from "react-router-dom";

import { MovieDetail } from "../pages/MovieDetail";
import { MovieList } from "../pages/MovieList.js";
import { PageNotFound } from "../pages/PageNotFound";
import { Search } from "../pages/Search";



export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}



/*
apiPath is the api endpoint that is special for the specific link. 
so we are linking the api path to our path on our website. 

check the api path. 
*/