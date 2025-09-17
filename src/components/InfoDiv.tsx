import type { ReactNode } from "react";

interface InfoDivProps {
  children: ReactNode;
  className?: string;
}

const InfoDiv = ({ children, className = "" }: InfoDivProps) => {
  return (
    <div className={`bg-[#FFFFFF] p-4 mb-4 mx-3 rounded-xl lg:mx-10 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default InfoDiv;
