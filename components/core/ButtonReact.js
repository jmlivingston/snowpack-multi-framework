import React, {useState} from "../../_snowpack/pkg/react.js";
import styles from "./ButtonReact.module.css.proxy.js";
function ButtonReact({counter, onClick}) {
  const [localCounter, setLocalCounter] = useState(0);
  return /* @__PURE__ */ React.createElement("button", {
    className: styles.button,
    onClick: () => {
      onClick();
      setLocalCounter(localCounter + 1);
    }
  }, "React Button (Local Counter: ", localCounter, " / Shared Counter: ", counter, ")");
}
export default ButtonReact;
