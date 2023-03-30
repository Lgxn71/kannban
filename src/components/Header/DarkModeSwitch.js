import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import classes from "./DarkModeSwitch.module.css";

const DarkModeSwitch = () => {
  return (
    <div className={classes["dark-mode-container"]}>
      <DarkModeIcon
        sx={
          {
            // color: "white",
            // preparation for second theme
          }
        }
      />
      <Switch
        sx={{
          "&": {
            padding: "6px",
            paddingRight: "8px",
            // always , change default size of switcher
          },
          "& .MuiButtonBase-root": {
            color: "#15161A",
            paddingTop: "11.5px",
            // inactive  switch change default button color on dark
          },
          "& .MuiSwitch-track": {
            borderRadius: "100px",
            border: "1px solid #EFEFF0",
            bgcolor: "#F9FAFB",
            // inactive switch сhange default background color on white
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#fff",
            // active switch, change default color on white
          },
          "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            bgcolor: "#15161A",
            opacity: 1,
            borderRadius: "100px",
            // active switch, change  default background color on dark and border-radius
          },
          "& .MuiSwitch-thumb": {
            width: "16px",
            height: "16px",
            // toggler size
          },
        }}
      />
    </div>
  );
};
export default DarkModeSwitch;
