import { useSelector } from "react-redux";

import Container from "../UI/Container";
import classes from "./Footer.module.css";
const Footer = () => {
  const isDarkTheme = useSelector((state) => state.isDark);

  return (
    <Container>
      <div className={classes["footer-container"]}>
        <h2
          className={`${classes["footer-title"]}
          ${
            isDarkTheme
              ? classes["footer-title-dark-theme"]
              : classes["footer-title-white-theme"]
          }`}
        >
          Alixyz | 2023
        </h2>
        <ul className={classes["link-container"]}>
          <a
            id={classes["border"]}
            className={classes["link"]}
            href="https://github.com/Lgxn71"
          >
            Github
          </a>
          <a
            className={classes["link"]}
            href="https://www.linkedin.com/in/lgxn71/"
          >
            LinkedIn
          </a>
        </ul>
      </div>
    </Container>
  );
};
export default Footer;
