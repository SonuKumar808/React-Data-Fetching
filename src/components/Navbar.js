import React from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active link styling
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        Home
      </Link>
      <ul>
        <CustomLink to="/users">Users</CustomLink>
        <CustomLink to="/todos">Todos</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink to={to} activeClassName="active" {...props}>
        {children}
      </NavLink>
    </li>
  );
}

export default Navbar;
