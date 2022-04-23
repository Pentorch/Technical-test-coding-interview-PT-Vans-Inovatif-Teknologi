import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} duration={1000}>
            Produk
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            Tentang
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Kontak
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
