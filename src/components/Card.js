import { Link } from "react-router-dom";
import Logo  from "../assets/logo.png";

export const Card = ({movie}) => {
    const {id, original_title, overview, poster_path} = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Logo;


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="movie detail" />
            </Link>
    <div className="p-5">
        <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
    </div>
        </div>
  )
}




/*
const {id, original_title, overview, poster_path} = movie;
is all found in the json file. so we put all that in a variable called
movie.

in this component we are creating the card component. we passed movie
as a prop, destructured the json file, was able to use the properties from
the json file, into jsx and in the url. 

we also gave a dummy image file in case the poster image was not 
available.



https://image.tmdb.org/t/p/w500/
this url is the url to the poster path
anything after w500/ is the poster path

poster_path is a property in the json file, so that's why it's in 
the movie variable. 
so ultimately, we are getting the movie image from the json file 
from the url above. 



poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Logo;

this says, if we have poster_path, then load the image from the url,
else load Logo
*/