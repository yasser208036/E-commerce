"use client";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import Link from "next/link";
export default function page() {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems
    .reduce((acc, current) => {
      return acc + current.discountPrice * current.quantity;
    }, 0)
    .toFixed(2);
  const dispatch = useDispatch();
  function handleDelete(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success("removed successfully!");
  }
  function handelIncrementQty(cartId) {
    dispatch(incrementQty(cartId));
  }
  function handelDecrementQty(cartId) {
    dispatch(decrementQty(cartId));
  }
  return (
    <div className="container grid grid-cols-4 gap-3 min-h-[calc(100vh-136px)]">
      <div className="col-span-4 md:col-span-3 rounded-md bg-white h-fit">
        <h2 className="p-3 text-lg font-medium border-b border-gray-100">
          {`Cart (${cartItems.length})`}
        </h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="p-3 [&:not(:last-child)]:border-b border-gray-100"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={72}
                        height={72}
                      />
                      <p className="max-w-[500px]">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-end justify-center gap-1 min-w-28">
                      <p className="text-lg font-medium">{`$ ${item.discountPrice}`}</p>
                      <div className="flex flex-col lg:flex-row">
                        <p className="line-through text-gray-400 mr-3">{`$ ${item.price}`}</p>
                        <p className="text-[#f68b1e] bg-[#fef3e9] p-1 rounded">{`-${item.discountPercentage}`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center gap-2 text-[#f68b1e] text-sm font-medium hover:bg-[#fcdbb9] py-1 px-2 rounded"
                    >
                      <MdDeleteOutline className="text-2xl" />
                      REMOVE
                    </button>
                    <div className="flex items-center gap-3">
                      <button
                        style={{
                          pointerEvents: item.quantity == 1 ? "none" : "auto",
                          opacity: item.quantity == 1 ? ".5" : "1",
                        }}
                        onClick={() => handelDecrementQty(item.id)}
                        className="drop-shadow-xl flex items-center justify-center rounded bg-[#f68b1e] text-white p-2"
                      >
                        <FaMinus />
                      </button>
                      <span className="text-center w-5">{item.quantity}</span>
                      <button
                        onClick={() => handelIncrementQty(item.id)}
                        className="drop-shadow-xl flex items-center justify-center rounded bg-[#f68b1e] text-white p-2"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center gap-5 h-[250px]">
            <h2 className="font-medium">Your cart is empty!</h2>
            <p className="text-sm">
              Browse our categories and discover our best deals!
            </p>
            <Link
              href="/"
              className="drop-shadow-xl rounded bg-[#f68b1e] text-white p-3"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
      <div className="rounded-md col-span-4 md:col-span-1 bg-white flex items-center md:flex-col md:items-stretch font-medium text-sm h-fit">
        <h2 className="p-2">CART SUMMARY</h2>
        <p className="p-2 md:border-y border-gray-100 flex justify-between items-center">
          Subtotal
          <span className="text-base font-semibold">{`$${totalPrice}`}</span>
        </p>
        <button className="drop-shadow-xl flex items-center justify-center rounded bg-[#f68b1e] text-white p-2 m-2">
          {`CHECKOUT $${totalPrice}`}
        </button>
      </div>
    </div>
  );
}
