"use client";
import { useSelector } from "react-redux";

export default function CartCount() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <span className="absolute top-0 right-0 w-5 h-5 rounded-full text-center leading-5 font-bold bg-white text-gray-800">
      {cartItems.length}
    </span>
  );
}
