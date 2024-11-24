import React from "react";

// Renders a dropdown menu for selecting languages.
const LanguageDropdown = () => {
  return (
    <div className="w-48 bg-[#2B2828] text-white text-sm rounded-md shadow-lg p-1 relative">
      <div className="absolute top-0 left-6 w-2 h-2 bg-[#2B2828] rotate-45 -translate-y-1/2"></div>
      <ul>
        <li className="flex items-center gap-2 py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">
          <span className="w-5 h-5">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-full h-full object-cover rounded-full"
            />
          </span>
          English (US)
        </li>
        <li className="flex items-center gap-2 py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">
          <span className="w-5 h-5">
            <img
              src="https://flagcdn.com/jp.svg"
              alt="Japan Flag"
              className="w-full h-full object-cover rounded-full"
            />
          </span>
          Japanese
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
