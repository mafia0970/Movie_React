import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card.jsx";

export const Movies = () => {
  const moviesdata = useLoaderData();

  // Conditional rendering for loader or empty data states

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        listStyle: "none",
      }}
    >
      {moviesdata.Search.map((currmovie) => (
        <Card
          key={currmovie.imdbID}
          Poster={currmovie.Poster}
          Title={currmovie.Title}
          id={currmovie.imdbID}
        />
      ))}
    </ul>
  );
};
