import type { ReactNode } from "react";

interface InfoTextProps {
  className?: string;
  children: ReactNode;
}

const InfoText = ({ children, className = "" }: InfoTextProps) => {
  return (
    <div className={`${className} text-[#505050] py-2 px-4 font-normal text-md lg:text-2xl dark:text-yellow-300`}>
      {children}
    </div>
  );
};

export default InfoText;
