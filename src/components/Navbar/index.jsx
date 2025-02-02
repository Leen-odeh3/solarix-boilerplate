import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from '../Logo'
import { FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [open, setopen] = useState(false);
  const [active, setactive] = useState(false);
  const handlescore = () => {
    const currentscrollpos = window.screenY;
    if (currentscrollpos > 50) {
      setactive(true);
    }
    else {
      setactive(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handlescore)
    return () => window.removeEventListener('scroll', handlescore);
  }, [active])
  return (
    <nav className={`navbar ${active ? 'active' : ""}`}>
      {
        open ? (<div className="sidebar__overlay" onClick={() => setopen(!open)}> </div>) : ""
      }
      <Logo />
      <div className={`box nav__tabs ${open ? 'visible' : ''}`}>
        <div className="icon__container cancel__btn" onClick={() => setopen(!open)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            key={index}
            to={tab.id}
            className="tab"
            activeClass="g-text"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setopen(!open)}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="box">
        <Link to="contact" className="btn contact__btn">
          Get started
        </Link>
        <div className="icon__container menu__btn" onClick={() => setopen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
