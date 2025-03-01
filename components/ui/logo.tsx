import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="relative w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M12 2a10 10 0 1 1-7.07 17.07 10 10 0 0 1 14.14-14.14A10 10 0 0 1 12 2zm-2 12.5h4v1.5h-4v-1.5zm-1-3.5a2 2 0 1 1 4 0v1h-2v-1h-2zm3.5 0h1.5v-1h-1.5v1zm-.5-3.5a2.5 2.5 0 0 1 5 0v2h1.5a2 2 0 0 1 2 2v3.5h-2v-3.5h-1.5v3.5h-8v-3.5a2 2 0 0 1 2-2H11v-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Writers<span className="text-yellow-500">World</span>
      </h1>
    </div>
  );
};

export default Logo;
