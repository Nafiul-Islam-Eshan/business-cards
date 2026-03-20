import { Link, TextAlignCenter, X } from "lucide-react";
import React, { use, useState } from "react";

const Navbar = ({ navigationData }) => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  const navData = use(navigationData);

  const navigation = navData.navigation;

  const Links = navigation.map((route, index) => (
    <li key={index} className=" hover:bg-amber-500">
      <a href={route.url}>{route.title}</a>
    </li>
  ));

  return (
    <nav className="flex justify-between m-3 text-lg">
      <div onClick={handleOpen} className="flex gap-2 relative">
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <TextAlignCenter className="md:hidden"></TextAlignCenter>
        )}

        <ul
          className={`md:hidden absolute 
            ${open ? "top-9" : "-top-50"} duration-200
            bg-amber-400 p-2 space-y-1.5 rounded-sm`}
        >
          {Links}
        </ul>

        <h3>My Navbar</h3>
      </div>

      <ul className="hidden md:flex gap-5">{Links}</ul>

      <button className="btn btn-warning">Log in</button>
    </nav>
  );
};

export default Navbar;
