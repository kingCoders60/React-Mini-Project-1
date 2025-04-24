import React from "react";
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-600 text-white flex">
      <h2 className="text-2xl"> CoderG</h2>
      <div className="flex gap-10 text-lg underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
