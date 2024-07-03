import Card from "@/app/components/Card";
import Secation_head from "@/app/elements/Secation_head";

async function getData(search) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function page({ params }) {
  const { products } = await getData(params.searched);
  // console.log(params.searched);
  return (
    <div className="bg-slate-200">
      <div className="container pt-8">
        <Secation_head content={`You Searched for ${params.searched}`} />
        <div className="mt-5 grid gap-2 grid-cols-auto-fit-minmax">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
