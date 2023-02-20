import { ReactNode, useState } from 'react';
import { ChevronDown } from 'react-feather';

type Props = {
  category: string;
  children: ReactNode;
};

const Dropdown = ({ category, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 ${
        !isVisible && '[&_p:nth-child(n+2)]:hidden'
      } bg-white hover:[&>p]:bg-slate-100`}
      onMouseOver={() => setIsVisible((prev) => !prev)}
      onMouseOut={() => setIsVisible(false)}
    >
      <p className="flex justify-between">
        {category}
        <ChevronDown />
      </p>
      {children}
    </div>
  );
};

export default Dropdown;
