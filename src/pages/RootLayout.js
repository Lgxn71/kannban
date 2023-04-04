import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={classes["main-container"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
