import { NavLink } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Container>
      <header className={classes.header}>
        <div className={classes.navbar}>
          <div>
            <h1 className={classes.logo}>taskmanager.</h1>
          </div>
          <ul className={classes["navbar-links"]}>
            <li>
              <NavLink
                to="kannban"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                kanban
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                docs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button>PlaceHolder</button>
        </div>
      </header>
    </Container>
  );
};
export default Header;
