import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="first-item">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Pratos do dia
          </NavLink>
        </li>
        <li>
          <a
            href="#lanches"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Lanches
          </a>
        </li>
        <li>
          <a
            href="#sobremesas"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Açai
          </a>
        </li>
        <li>
          <a
            href="#bebidas"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Bebidas
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavLinks;
