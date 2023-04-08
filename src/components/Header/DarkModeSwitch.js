import { useDispatch, useSelector } from "react-redux";
import { switchThemes } from "../../store/store";

import SwitchToLightThemeIcon from "../svgs/SwitchToLightIcon.js";
import SwitchToDarkThemeIcon from "../svgs/SwitchToDarkIcon";
import Toggle from "react-styled-toggle";

import classes from "./DarkModeSwitch.module.css";
const DarkModeSwitch = () => {
  const isThemeDark = useSelector((state) => state.isDark);
  const dispatch = useDispatch();

  const switchThemesHandler = () => {
    dispatch(switchThemes());
  };

  return (
    <div className={classes["switcher-container"]}>
      <div className={classes["icons-handler"]}>
        {isThemeDark ? <SwitchToLightThemeIcon /> : <SwitchToDarkThemeIcon />}
      </div>

      <Toggle
        translate="18"
        sliderWidth="16"
        sliderHeight="16"
        width="40"
        height="20"
        backgroundColorChecked="#EFEFF0"
        backgroundColorUnchecked="#EFEFF0"
        backgroundColorButton="#15161A"
        onChange={switchThemesHandler}
      />
    </div>
  );
};
export default DarkModeSwitch;
