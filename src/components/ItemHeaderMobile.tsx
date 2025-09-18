// ItemHeaderMobile.tsx
import { Link } from "react-router-dom";

interface ItemHeaderMobileProps {  
  titulo: string;
  to?: string;
  href?: string;
}

const ItemHeaderMobile = ({ titulo, to, href }: ItemHeaderMobileProps) => {
  const baseClasses =
    "flex items-center justify-center gap-2 text-white font-bold text-xl px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors";

  if (to) {
    return (
      <li>
        <Link to={to} className={baseClasses}>
          {titulo}
        </Link>
      </li>
    );
  } else if (href) {
    return (
      <li>
        <a href={href} className={baseClasses}>
          {titulo}
        </a>
      </li>
    );
  }

  return null;
};

export default ItemHeaderMobile;
