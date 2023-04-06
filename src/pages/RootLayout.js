import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  const isDarkTheme = useSelector((state) => state.isDark);
  return (
    <div className={isDarkTheme ? classes["background-black"] : undefined}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
