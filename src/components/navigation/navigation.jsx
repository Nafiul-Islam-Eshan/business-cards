import React, { use } from "react";

const Navbar = ({ navigationData }) => {
  const navData = use(navigationData);
  const navigation = navData.navigation;

  return (
    <nav>
      <ul className="flex ">
        {navigation.map((route, index) => (
          <li key={index} className="mr-3">
            <a href={route.url}>{route.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
