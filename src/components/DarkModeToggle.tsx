import { useEffect, useState } from "react";

interface DarkModeToggleProps {
  title: string;
  imgSrc: string;
  alt: string;
}

const DarkModeToggle = ({title,imgSrc,alt}:DarkModeToggleProps) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

useEffect(() => {
const root = document.documentElement;

if (darkMode) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
} else {
    root.classList.remove("dark")
    localStorage.setItem("theme", "light");
}
}, [darkMode]);


const content = (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
        <img
        src={imgSrc}
        alt={alt}
        className="w-[55%] h-[55%] object-contain mb-1 aspect-square dark:invert"
        />
        <div className="text-black dark:text-yellow-300 font-medium text-center text-sm sm:text-2xl md:text-lg 2xl:text-[25px]">
        {title}
        </div>
    </div>
);

return (
    <article
        onClick={() => setDarkMode((prev) => !prev)}
        className="
        aspect-[10/9]
        bg-gradient-to-br from-[#ffffff] to-[#f1f1f1] 
        hover:from-[#eeeeee] hover:to-[#e9e9e9]
        rounded-md shadow-[0_2px_5px_rgba(0,0,0,0.3)] 
        w-full h-full flex 
        transition-all duration-100 ease-in-out 
        hover:scale-98
        dark:bg-black dark:from-black dark:to-black
        dark:hover:from-[#000000] dark:hover:to-[#000000]
        dark:border-2 dark:border-white
        ">
        <span className="flex-1 flex items-center justify-center w-full h-full cursor-pointer">
            {content}
        </span>
    </article>
    );
};

export default DarkModeToggle;