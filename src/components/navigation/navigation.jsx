import { TextAlignCenter, X } from "lucide-react";
import React, { use, useState } from "react";

const Navbar = ({ navigationData }) => {
  const [open, setOpen] = useState(false)
  function handleOpen(){
    setOpen(!open)
  }

  const navData = use(navigationData);
  const navigation = navData.navigation;

  return (
    <nav className="flex justify-between m-3">

      <div onClick={handleOpen} className="flex gap-2">
        {open ? <X className="md:hidden"></X> : <TextAlignCenter className="md:hidden"></TextAlignCenter> }
        
        <h3>My Navbar</h3>
      </div>

      <ul className="flex ">
        {navigation.map((route, index) => (
          <li key={index} className="mr-3">
            <a href={route.url}>{route.title}</a>
          </li>
        ))}
      </ul>

      <button className="btn btn-primary">Log in</button>
    </nav>
  );
};

export default Navbar;
