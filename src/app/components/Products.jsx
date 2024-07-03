import Secation_head from "../elements/Secation_head";
import Card from "./Card";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=20&skip=80");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Products() {
  const { products } = await getData();
  return (
    <div className="bg-slate-200">
      <div className="container pt-8">
        <Secation_head content={"see our products"} />
        <div className="mt-5 grid gap-2 grid-cols-auto-fit-minmax">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
