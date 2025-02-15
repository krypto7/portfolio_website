import React from "react";
import "./style.css";

function CustomButtons({
  islink,
  btn_icon,
  hasIcon,
  btntitle_style,
  btn_title,
  btn_container,
  link_container,
  btnIcon_style,
}) {
  return (
    <>
      {islink ? (
        <a href="#" className={link_container}>
          <p className={btntitle_style}>{btn_title}</p>
          {hasIcon && <div className="btnIcon_style">{btn_icon}</div>}
        </a>
      ) : (
        <div className={btn_container}>{btn_title}</div>
      )}
    </>
  );
}

export default CustomButtons;
