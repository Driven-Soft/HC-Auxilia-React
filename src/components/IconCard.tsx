import { Link } from "react-router-dom";

interface IconCardProps {
  title: string;
  imgSrc: string;
  alt: string;
  link?: string;
  href?: string;
  onClick?: () => void;
}

const IconCard = ({title,imgSrc,alt,link,href,onClick,}: IconCardProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <img
        src={imgSrc}
        alt={alt}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-2 aspect-square object-contain "
      />
      <div className="text-black font-medium text-center text-sm sm:text-base md:text-lg">
        {title}
      </div>
    </div>
  );

  return (
    <article
      className="bg-[#F5F5FE] rounded-md shadow-2xl w-full h-full flex transition-all duration-100 ease-in-out hover:scale-98 hover:bg-[#ececec]">
      {link ? (
        <Link to={link} className="flex-1 flex items-center justify-center w-full h-full">
          {content}
        </Link>
      ) : href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center w-full h-full" >
          {content}
        </a>
      ) : (
        <span onClick={onClick} className="flex-1 flex items-center justify-center w-full h-full cursor-pointer">
          {content}
        </span>
      )}
    </article>
  );
};

export default IconCard;
