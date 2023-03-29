import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
