import Cat_product from "@/app/components/Cat_product";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: params.categorie,
  };
}
export default function page({ params }) {
  return <Cat_product category={params.categorie} limit={100} />;
}
