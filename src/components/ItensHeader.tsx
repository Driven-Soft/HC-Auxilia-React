import { Link } from "react-router-dom";

interface ItensHeaderProps {
  icone: string;
  titulo: string;
  to?: string;
  href?: string;
}

const ItensHeader = ({ icone, titulo, to, href }: ItensHeaderProps) => {
  const content = (
    <div className="flex flex-col items-center text-center text-gray-800 font-bold justify-center w-full h-full">
      <img
        src={icone}
        alt={titulo}
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1"
      />
      <span className="text-xs sm:text-sm md:text-base">{titulo}</span>
    </div>
  );

  return (
    <li className="bg-[#f9f9fd] rounded-lg shadow-md hover:bg-[#e0e0f0] transition 
                   w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 list-none flex justify-center items-center">
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
