import Link from "next/link";
import Image from "next/image";
export default function Card({ product }) {
  // calaculate the price afer discount
  const price = (product) => {
    return (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);
  };
  return (
    <Link href={`../product-details/${product.id}`}>
      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <span className="cat absolute top-6 -left-1 shadow-md bg-gray-700 text-white py-[2px] px-2">
          {product.category}
        </span>
        <div className="w-[250px] h-[250px] overflow-hidden mx-auto">
          <Image
            className="rounded-t-lg"
            src={product.images[0]}
            width={250}
            height={250}
            alt={product.title}
          />
        </div>
        <div className="p-5 space-y-2">
          <div className="pb-2 border-b-[1px] border-gray-300 text-center">
            <span className="text-gray-400">Brand: </span>
            <span className="font-semibold">{product.brand}</span>
          </div>
          <div className="text-center text-gray-600 font-medium truncate">
            {product.title}
          </div>
          <div className="flex items-center justify-center gap-1 font-mono">
            <span className="line-through text-gray-400">{`$${product.price}`}</span>
            <span className="border-b-2 border-red-400">{`$${price(
              product
            )}`}</span>
            <span className="text-red-500">{`(${product.discountPercentage}% Off)`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
