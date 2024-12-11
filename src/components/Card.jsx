import { NavLink } from "react-router-dom";

export const Card = ({ Poster, Title, id }) => {
  return (
    <li>
      <div className="card" style={{ width: "16rem" }}>
        <img className="card-img-top" src={Poster} alt={Title} />
        <div className="card-body">
          <NavLink to={`/movies/${id}`} style={{ backgroundColor: "white" }}>
            <p className="card-text">{Title}</p>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
