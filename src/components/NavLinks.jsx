import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/menu#lanches"
          >
            <div className="Navlinks_link_frits">
              <span>Burguer</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu#sobremesas"
          >
            <div className="Navlinks_link_sobre">
              <span>Sobremesa</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu#bebidas"
          >
            <div className="Navlinks_link_frits">
              <span>Bebidas</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
