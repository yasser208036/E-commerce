"use client";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

export default function Add_to_cart({ product }) {
  const dispatch = useDispatch();
  function handelAddItemToCart() {
    dispatch(addToCart(product));
    toast.success("added successfully!");
  }
  return (
    <button
      onClick={() => handelAddItemToCart()}
      className="flex items-center gap-2 border-[1px] border-orange-600 text-orange-400 bg-orange-100 py-2 px-3"
    >
      <IoCart className="text-orange-600" /> Add To Cart
    </button>
  );
}
