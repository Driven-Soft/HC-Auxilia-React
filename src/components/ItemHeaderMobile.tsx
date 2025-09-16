import { Link } from "react-router-dom";

interface ItemHeaderMobileProps {
  icone: string;
  titulo: string;
  to?: string;
  href?: string;
}

const ItemHeaderMobile = ({ icone, titulo, to, href }: ItemHeaderMobileProps) => {
  const content = (
    <div className="flex items-center gap-2">
      <img src={icone} alt={titulo} className="w-5 h-5" />
      <span>{titulo}</span>
    </div>
  );

  return (
    <li className="text-center py-4 hover:bg-gray-100">
    {to ? (
        <Link to={to} className="flex items-center justify-center gap-2 w-full">
        {content}
        </Link>
    ) : href ? (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full"
        >
        {content}
        </a>
    ) : (
        content
    )}
    </li>
  );
};

export default ItemHeaderMobile;
