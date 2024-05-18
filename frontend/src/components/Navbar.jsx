import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-red-600">Blog</h1>
      </Link>
      <div className="flex gap-2">
        <Link to={"/register"}>
          <Button value={"Register"} />
        </Link>
        <Link to={"/login"}>
          <Button value={"Login"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
