import "./NavBar.css";
import React, { useState } from "react";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!false);
  const scrollTo = () => setClick(false);

  return (
    <div className="NavBar">
      <div className="TheButtons">
        <button className="btn-hovering" id="logo">
          Agnar Holst
        </button>
        <a href="#project-title" className="btn-hovering" onClick={scrollTo}>
          Prosjekter
        </a>
        <a
          href="#aboutme-container"
          className="btn-hovering"
          onClick={scrollTo}>
          Om meg
        </a>
        <a href="#kontakt" className="btn-hovering" onClick={scrollTo}>
          Kontakt
        </a>
        {/* <a className="btn-hovering">NOR</a>
        <a className="btn-hovering">☀️</a> */}
      </div>
    </div>
  );
}

export default NavBar;
