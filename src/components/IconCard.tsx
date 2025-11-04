import { Link } from "react-router-dom";

interface IconCardProps {
  title: string;
  imgSrc: string;
  alt: string;
  link?: string;
  href?: string;
  onClick?: () => void;
}

const IconCard = ({ title, imgSrc, alt, link, href, onClick }: IconCardProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <img
        src={imgSrc}
        alt={alt}
        className="w-[55%] h-[55%] object-contain mb-1 aspect-square dark:invert"
      />
      <div className="text-black dark:text-yellow-300 font-medium text-center text-sm sm:text-2xl md:text-lg 2xl:text-[26px]">
        {title}
      </div>
    </div>
  );

  return (
    <article
      className="relative md:aspect-[10/9]
        bg-gradient-to-br from-[#ffffff] to-[#f1f1f1] 
        hover:from-[#eeeeee] hover:to-[#e9e9e9]
        rounded-md shadow-[0_2px_5px_rgba(0,0,0,0.3)] 
        w-full h-full flex 
        transition-all duration-100 ease-in-out 
        hover:scale-98
        dark:bg-black dark:from-black dark:to-black
        dark:hover:from-[#000000] dark:hover:to-[#000000]
        dark:border-2 dark:border-white
      "
    >
      {link ? (
        <Link
          to={link}
          className="flex-1 flex items-center justify-center w-full h-full"
        >
          {content}
        </Link>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center w-full h-full"
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
        >
          {content}
        </a>
      ) : (
        <span
          onClick={onClick}
          className="flex-1 flex items-center justify-center w-full h-full cursor-pointer"
        >
          {content}
        </span>
      )}
    </article>
  );
};

export default IconCard;
