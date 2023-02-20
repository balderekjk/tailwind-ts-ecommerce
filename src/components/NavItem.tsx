import { ReactNode } from 'react';

type Props = {
  isCollapsed?: Boolean;
  children: ReactNode;
};

const NavItem = ({ isCollapsed, children }: Props) => {
  return (
    <div
      className={`z-50 flex w-full flex-col bg-white hover:bg-slate-100 hover:text-blue-600 md:flex md:w-fit [&_p]:px-2 [&_svg]:mx-2 ${
        isCollapsed ? 'hidden' : 'justify-center'
      }`}
    >
      {children}
    </div>
  );
};

export default NavItem;
