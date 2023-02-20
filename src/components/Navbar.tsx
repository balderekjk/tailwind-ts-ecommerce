import { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'react-feather';
import Dropdown from './Dropdown';
import NavItem from './NavItem';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="h-[64px] border-b border-slate-400 py-2">
      <div className={`flex flex-wrap items-start justify-between`}>
        <div className="flex items-center gap-2 pt-2">
          <img
            src="https://assets.website-files.com/593997d928ae740a8b033d30/593997da28ae740a8b0341e1_LAPIS-LAZULI_ICON.png"
            alt="site logo"
            className="h-8"
          />
          <p className="text-xl font-bold italic text-blue-900">
            Gems of Grace
          </p>
        </div>
        <div
          className="flex cursor-pointer items-start p-2 md:hidden"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? <Menu /> : <X />}
        </div>
        <div
          className={`flex w-full cursor-pointer flex-col items-start pt-[15px] text-blue-800 md:w-fit md:flex-row md:pt-[11px] [&_p]:cursor-pointer [&_p]:pb-5`}
        >
          <NavItem isCollapsed={isCollapsed}>
            <Dropdown category="Bracelets">
              <p>One</p>
              <p>Two</p>
              <p>Three</p>
            </Dropdown>
          </NavItem>
          <NavItem isCollapsed={isCollapsed}>
            <Dropdown category="Earrings">
              <p>Four</p>
              <p>Five</p>
              <p>Six</p>
            </Dropdown>
          </NavItem>
          <NavItem isCollapsed={isCollapsed}>
            <Dropdown category="Necklaces">
              <p>Seven</p>
              <p>Eight</p>
              <p>Nine</p>
            </Dropdown>
          </NavItem>
        </div>
        <div className="flex w-full flex-col md:flex md:w-fit md:flex-row md:pt-2 [&>*]:pb-5 [&_div]:cursor-pointer">
          <NavItem isCollapsed={isCollapsed}>
            <ShoppingCart />
          </NavItem>
          <NavItem isCollapsed={isCollapsed}>
            <User />
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
