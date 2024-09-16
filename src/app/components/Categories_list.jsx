"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Categories_list() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div
      style={{ transform: open ? "translateX(0)" : "translateX(-320px)" }}
      className="fixed z-20 top-0 left-0 transition-transform duration-500"
    >
      <div
        onClick={() => setOpen(!open)}
        className="absolute flex items-center justify-center cursor-pointer top-[50%] -right-11 w-11 h-11 rounded-full bg-white text-gray-600"
      >
        {open ? (
          <FaArrowRightToBracket className="w-8 h-8 rotate-180" />
        ) : (
          <FaArrowRightFromBracket className="w-8 h-8" />
        )}
      </div>
      <aside className="bg-slate-200 p-2 w-80 h-screen border overflow-y-scroll">
        <h2 className="font-bold mb-3 text-center">ALL CATEGORIES</h2>
        {categories.map((category) => (
          <Link
            onClick={() => setOpen(false)}
            key={category}
            href={`../products-by-category/${category}`}
            className="block border-b border-gray-400 py-2 hover:translate-x-2 hover:text-white transition-all"
          >
            {category}
          </Link>
        ))}
      </aside>
    </div>
  );
}
