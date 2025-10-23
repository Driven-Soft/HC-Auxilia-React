import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className = "" }: WrapperProps) => {
  return (
    <section
      className={`dark:bg-[#000000] flex w-full h-full  shadow-[0_-9px_10px_rgba(0,0,0,0.05),0_9px_10px_rgba(0,0,0,0.05)] bg-[#D9D9D9] mb-6 mt-2 lg:mt-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
