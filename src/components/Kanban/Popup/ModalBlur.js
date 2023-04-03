import { createPortal } from "react-dom";

import classes from "./ModalBlur.module.css";

const ModalBlur = (props) => {
  const { setIsPopupShown } = props;

  const closePopUpHandler = () => {
    setIsPopupShown(false);
  };

  return (
    <>
      {createPortal(
        <div
          onClick={closePopUpHandler}
          className={classes["background-blur"]}
        ></div>,
        document.getElementById("modal-background")
      )}
    </>
  );
};
export default ModalBlur;
