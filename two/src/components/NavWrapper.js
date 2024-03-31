import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function NavWrapper() {
  console.count("NavWrapper");

  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      {/* <Outlet /> */}
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default NavWrapper;
