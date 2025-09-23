// ItemHeaderMobile.tsx
import { Link } from "react-router-dom";

interface ItemHeaderMobileProps {  
  titulo: string;
  to: string;
}

const ItemHeaderMobile = ({ titulo, to }: ItemHeaderMobileProps) => {
  const baseClasses =
    "flex items-center justify-center gap-2 font-bold text-xl px-4 py-2 rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors dark:border-4 dark:border-white dark:text-yellow-300";

    return (
      <li>
        <Link to={to} className={baseClasses}>
          {titulo}
        </Link>
      </li>
    );
};

export default ItemHeaderMobile;
