import Landing from "./components/Landing.jsx";
import Products from "./components/Products.jsx";
import Cat_product from "./components/Cat_product.jsx";
export default function Home() {
  return (
    <>
      <Landing />
      <Products />
      <Cat_product category={"mens-watches"} limit={4} />
      <Cat_product category={"laptops"} limit={4} />
      <Cat_product category={"smartphones"} limit={4} />
      <Cat_product category={"vehicle"} limit={4} />
    </>
  );
}
