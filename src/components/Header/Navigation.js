import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
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
    </nav>
  );
};
export default Navigation;
