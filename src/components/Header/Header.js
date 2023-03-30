import Container from "../UI/Container";

import Navigation from "./Navigation";
import DarkModeSwitch from "./DarkModeSwitch";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <header className={classes.header}>
        <Navigation />
        <DarkModeSwitch />
      </header>
    </Container>
  );
};
export default Header;
