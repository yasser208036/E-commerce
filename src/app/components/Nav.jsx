"use client";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [search, setSearch] = useState("");
  const handelSearh = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <nav className="bg-gray-800 border-gray-200 h-20">
      <div className="max-w-screen-xl flex items-center gap-3 mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            className="w-20 md:w-28 rounded-lg"
            src={Logo}
            width={500}
            height={500}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center flex-1 bg-white rounded-3xl h-12 overflow-hidden">
          <input
            className=" border-none outline-none h-full w-32 sm:w-full flex-1 text-black placeholder-gray-600 text-xl pl-4"
            type="text"
            placeholder="search..."
            onChange={(e) => handelSearh(e)}
          />
          <Link
            href={`../searched_page.jsx/${search}`}
            className="flex flex-shrink-0 items-center justify-center w-12 h-full cursor-pointer bg-gray-400"
            onClick={() => setSearch("")}
          >
            <FaSearch className="text-gray-600" />
          </Link>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer">
          <IoCart className="text-2xl text-gray-600" />
        </div>
      </div>
    </nav>
  );
}
