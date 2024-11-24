import React from "react";

// Rrenders a dropdown menu for user actions such as sign in, sign up, and messaging.
const UserDropdownMenu = () => {
  return (
    <div className="w-56 bg-[#2B2828] text-white text-sm rounded-md shadow-lg p-2">
      <ul>
        <li className="py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">Sign in</li>
        <li className="py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">Sign up</li>
        <hr className="border-[#515151] my-2" />
        <li className="py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">
          List your item
        </li>
        <li className="py-2 px-4 hover:bg-[#443E3E] cursor-pointer rounded-[30px]">
          Message to Yuta (The founder)
        </li>
      </ul>
    </div>
  );
};

export default UserDropdownMenu;
