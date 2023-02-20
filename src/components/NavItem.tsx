import { ReactNode } from 'react';

type Props = {
  isCollapsed?: Boolean;
  children: ReactNode;
};

const NavItem = ({ isCollapsed, children }: Props) => {
  return (
    <div
      className={`flex w-full flex-col hover:bg-slate-100 hover:text-blue-600 md:w-fit [&_p]:px-2 ${
        isCollapsed ? 'hidden' : 'justify-center'
      }`}
    >
      {children}
    </div>
  );
};

export default NavItem;
