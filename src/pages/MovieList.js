import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

export const MovieList = ({apiPath}) => {
  const { data: movies } = useFetch(apiPath)

  if (!movies) {
    return null; // or render a loading state, error message, or fallback content
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        </div>
      </section>
    </main>
  )
}
