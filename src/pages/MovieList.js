import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";


export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);



  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other: justify-evenly">
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        </div>
      </section>
    </main>
  )
}



/* it is movie because the api is grabbing one movie. 
map function allows you to transform each element of an array and 
return a new arrray based on the transformations. 
The movie prop is set to the current movie object, allowing the Card
component to access and display the details of the specific movie. 

In summary, the code iterates over the movies array, creating a Card 
component for each movie object and passing the movie data as a 
prop to the Card component. 

*****
This allows the Card component to 
display the information related to each movie, such as its title, 
image, or any other details you have defined within the Card component.

so movie={movie} will be used as a prop for the Card component!

*/
