import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const moviedata = useLoaderData();

  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">{moviedata.Title}</h1>
          <p className="lead font-weight-normal">{moviedata.Actors}</p>
          <a className="btn btn-outline-secondary" href="#">
            Back
          </a>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        <div></div>
      </div>
    </>
  );
};
