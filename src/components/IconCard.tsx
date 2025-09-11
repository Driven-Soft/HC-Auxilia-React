import { Link } from "react-router-dom";

interface IconCardProps {
  title: string;
  imgSrc: string;
  alt: string;
  link?: string;         // rota interna
  href?: string;         // link externo
  onClick?: () => void;  // ação de clique
}

const IconCard = ({ title, imgSrc, alt, link, href, onClick }: IconCardProps) => {
  const content = (
    <>
      <img src={imgSrc} alt={alt} className="w-12 h-12 mb-2"/>
      <div>{title}</div>
    </>
  );

  return (
    <article>
      {link ? (
        <Link to={link}>{content}</Link>
      ) : href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
      ) : (
        <span onClick={onClick} className="cursor-pointer">{content}</span>
      )}
    </article>
  );
};

export default IconCard;
