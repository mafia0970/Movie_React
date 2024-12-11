import "./styles/error.css";
export const Errorpage = () => {
  return (
    <>
      <div className="error-container">
        <h1> 404 </h1>
        <p>Oops! The page you're looking for is not here.</p>
        <a href="/">Go Back to Home</a>
      </div>
    </>
  );
};
