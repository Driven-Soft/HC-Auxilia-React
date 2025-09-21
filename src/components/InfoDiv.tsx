import type { ReactNode } from "react";

interface InfoDivProps {
  children: ReactNode;
  className?: string;
}

const InfoDiv = ({ children, className = "" }: InfoDivProps) => {
  return (
    <div className={`bg-[#FFFFFF] dark:bg-black p-4 mb-4 mx-3 rounded-xl lg:mx-10 shadow-[2px_5px_10px_rgba(0,0,0,0.3)] ${className}`}>
      {children}
    </div>
  );
};

export default InfoDiv;
