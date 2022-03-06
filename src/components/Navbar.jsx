import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DIV } from "./navbar.js";

function Navbar() {
    const [ show, handleShow ] = useState( false );
    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 390) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <DIV>
      <div className={`navbar ${show && "navbar_change"}`}>
        <img
          className="logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />

        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </DIV>
  );
}

export default Navbar;
