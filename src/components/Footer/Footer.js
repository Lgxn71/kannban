import Container from "../UI/Container";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <Container>
      <div className={classes["footer-container"]}>
        <h2 className={classes["footer-title"]}>Alixyz | 2023 </h2>
        <ul className={classes["link-container"]}>
          <a id={classes["border"]} className={classes["link"]} href="/">
            Github
          </a>
          <a className={classes["link"]} href="/">
            LinkedIn
          </a>
          {/* insert links */}
        </ul>
      </div>
    </Container>
  );
};
export default Footer;
