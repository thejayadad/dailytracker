"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./theme-content";
import Logo from "../ui/logo";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // Prevent hydration mismatch
  if (!theme) return null;

  return (
    <header className="w-full border-b border-neutral-100 py-4">
      <div className="flex mx-auto max-w-screen-xl p-4 items-center justify-between">
        <div>
            <Logo />
        </div>
        <div>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full bg-[#E3E6EB] dark:bg-[#222A3A] shadow-md dark:shadow-lg transition-transform transform active:scale-90 duration-200"
          >
            {theme === "light" ? (
              <FiMoon className="text-[#374151] dark:text-[#FFD369] transition-all duration-300" size={24} />
            ) : (
              <FiSun className="text-[#FFD369] dark:text-[#18191a] transition-all duration-300" size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
