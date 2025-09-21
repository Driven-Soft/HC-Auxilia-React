import { Link } from "react-router-dom";

interface ItensHeaderProps {
  icone: string;
  titulo: string;
  to?: string;
  href?: string;
}

const ItensHeader = ({ icone, titulo, to, href }: ItensHeaderProps) => {
  const content = (
    <div className="flex flex-col items-center text-center text-gray-900 font-bold justify-center w-full h-full dark:text-yellow-300 dark:border-2 dark:border-white">
      <img
        src={icone}
        alt={titulo}
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 dark:invert"
      />
      <span className="text-xs sm:text-sm md:text-base">{titulo}</span>
    </div>
  );

  return (
    <li className="
        bg-gradient-to-r from-[#fcfcff] to-[#f0f0f0]
      hover:from-[#f3f3f3] hover:to-[#ececec]
        rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.3)] 
        hover:scale-105 
        transition-transform duration-200 
        w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-25
        list-none flex justify-center items-center
        dark:bg-black dark:from-black dark:to-black
        dark:hover:from-[#000000] dark:hover:to-[#000000]
      ">
      {to ? (
        <Link to={to} className="flex w-full h-full justify-center items-center">
          {content}
        </Link>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full h-full justify-center items-center"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
};

export default ItensHeader;
