import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movies } from "./pages/Movies";
import { Applayout } from "./pages/Applayout";
import "bootstrap/dist/css/bootstrap.css";
import { Errorpage } from "./pages/Errorpage";
import { fetchAPIdata } from "./api/fetchapi";
import { MovieDetails } from "./components/MovieDetails";
import { getmoviedetails } from "./api/getmoviedetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Errorpage />,

      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: fetchAPIdata,
        },
        {
          path: "/movies/:movieID",
          element: <MovieDetails />,
          loader: getmoviedetails,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
