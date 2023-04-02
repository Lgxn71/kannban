import { useState } from "react";
const useClosePopup = () => {
  const [isShown, setIsShown] = useState(false);

  return [isShown, setIsShown];
};
export default useClosePopup;
