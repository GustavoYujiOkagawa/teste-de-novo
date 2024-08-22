import React from "react";
import { NavLink } from "react-router-dom";
import { navlink1, navlink2, navlink3, navlink4 } from "../constants";

const NavLinks = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="first-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <div className="Navlinks_link_burguer">
            <img src={navlink1} width={40} alt="" />
            <a>Burguer</a>
            </div>
          </NavLink> 
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <div className="Navlinks_link_frits">
            <img src={navlink4} width={28} alt="" />
            <a>Fritas</a>
            </div>
          </NavLink>
        </li>
        <li>
          <a
            href="#sobremesas"
          >
            <div className="Navlinks_link_sobre">
            <img src={navlink3} width={28} alt="" />
            <a>Sobremesa</a>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#bebidas"
          >
            <div className="Navlinks_link_frits">
            <img src={navlink2} width={28} alt="" />
            <a>Bebidas</a>
            </div>
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavLinks;
