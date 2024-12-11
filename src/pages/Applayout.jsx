import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Loading from "../components/LoadingState";

export const Applayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};
