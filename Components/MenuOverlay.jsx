import React from "react";
import MobileNavLink from "./MobileNavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex md:hidden flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <MobileNavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
