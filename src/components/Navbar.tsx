import { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'react-feather';
import Dropdown from './Dropdown';
import NavItem from './NavItem';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="h-[64px] border-b border-slate-400 py-2">
      <div className={`flex flex-wrap items-start justify-between`}>
        <div className="flex cursor-pointer items-center gap-2 pt-2">
          <img
            src="https://assets.website-files.com/593997d928ae740a8b033d30/593997da28ae740a8b0341e1_LAPIS-LAZULI_ICON.png"
            alt="site logo"
            className="h-8"
          />
          <p className="text-xl font-bold italic text-blue-900 hover:text-blue-700">
            Gems of Grace
          </p>
        </div>
        <div
          className="flex cursor-pointer items-start p-2 hover:bg-slate-100 hover:text-blue-600 md:hidden"
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
        <div className="absolute right-10 flex w-fit flex-row pt-2 md:relative md:right-0 [&_div]:cursor-pointer">
          <NavItem isCollapsed={false}>
            <ShoppingCart />
          </NavItem>
          <NavItem isCollapsed={false}>
            <User />
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
