import Secation_head from "../elements/Secation_head";
import Card from "./Card";
import { Suspense } from "react";

async function getData(category, limit) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Cat_product({ category, limit }) {
  const { products } = await getData(category, limit);
  return (
    <div className="bg-slate-200">
      <div className="container pt-8">
        <Secation_head content={`${category}`} />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mt-5 grid gap-2 grid-cols-auto-fit-minmax">
            {products.map((product) => (
              <Card product={product} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
