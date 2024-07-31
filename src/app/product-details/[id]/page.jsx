import Custom_slider from "@/app/elements/Custom_slider";
import { Suspense } from "react";
import Loadingelement from "@/app/elements/Loadingelement";
import Add_to_cart from "@/app/components/Add_to_cart";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}
export default async function page({ params }) {
  const product = await getData(params.id);
  const discountPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  return (
    <Suspense fallback={<Loadingelement />}>
      <div className="container lg:w-[80%] p-2 md:my-1 md:h-[calc(100vh-136px)] flex flex-col md:flex-row items-center gap-2 bg-white">
        <div className="h-full w-[50%]">
          <Custom_slider images={product.images} />
        </div>
        <div className="flex flex-col items-center justify-center text-sm lg:text-lg text-center md:w-[50%] p-2 space-y-3 h-full">
          <h1 className="font-medium">{product.title}</h1>
          <p className="text-gray-400 leading-5 ">{product.description}</p>
          <div className="flex gap-2">
            <p className="border-r-2 pr-3 border-orange-600">
              <span className="text-orange-600 font-semibold">Rating: </span>
              {product.rating}
            </p>
            <p className="border-r-2 pr-3 border-orange-600">
              <span className="text-orange-600 font-semibold">Brand: </span>
              {product.brand}
            </p>
            <p>
              <span className="text-orange-600 font-semibold">Category: </span>
              {product.category}
            </p>
          </div>
          <div className="bg-slate-200 p-2 space-y-3 w-full">
            <p>
              <span className="line-through text-gray-400 mr-3">{`$${product.price}`}</span>
              (Inclusive of all taxes)
            </p>
            <p>
              <span className="text-orange-600 font-semibold mr-3">
                {`$${discountPrice}`}
              </span>
              <span className="bg-orange-600 text-white text-xs font-mono py-1 px-2 rounded-md">{`${product.discountPercentage}% OFF`}</span>
            </p>
          </div>
          <div></div>
          <div className="flex gap-3">
            <Add_to_cart product={product} />
            <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
