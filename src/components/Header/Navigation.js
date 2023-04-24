import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const isDarkTheme = useSelector((state) => state.isDark);
  const darkThemeNavBar = (
    <nav className={classes.navbar}>
      <div>
        <h1
          className={`
          ${classes.logo}
          ${isDarkTheme ? classes["logo-dark-theme"] : undefined}`}
        >
          taskmanager.
        </h1>
      </div>

      <ul className={classes["navbar-links"]}>
        <li className={classes["dark-link"]}>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            kanban
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  const lightThemeNavBar = (
    <nav className={classes.navbar}>
      <div>
        <h1 className={classes.logo}>taskmanager.</h1>
      </div>

      <ul className={classes["navbar-links"]}>
        <li className={classes["ligth-link"]}>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            kanban
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  return <>{isDarkTheme ? darkThemeNavBar : lightThemeNavBar}</>;
};
export default Navigation;
