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
      className={`flex flex-col ${
        !isVisible && '[&_p:nth-child(n+2)]:hidden'
      } hover:[&>p:nth-child(n+2)]:bg-slate-200`}
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
