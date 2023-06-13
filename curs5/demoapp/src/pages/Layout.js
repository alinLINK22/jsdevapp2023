import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <li>
          <Link to="/aaa">Page 404</Link>
        </li>
        </li>
      </ul>
    </nav>
    <Outlet />
    <footer>Footer</footer>
  </>
  )
}
