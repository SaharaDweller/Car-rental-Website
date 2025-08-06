import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export default function DarkMode({theme , setTheme}) {

  return (
    <>
      {theme === "dark" ? (
        <IoSunny
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaMoon
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
