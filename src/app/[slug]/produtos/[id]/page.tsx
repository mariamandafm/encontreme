"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/basic-template/sections/Footer";
import Navbar from "@/components/basic-template/sections/Navbar";
import React from "react";
import { ceramicProducts, CeramicProduct } from "@/data/products";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<CeramicProduct | null>(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      const foundProduct = ceramicProducts.find((prod) => prod.slug == id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-12 font-sans mb-14">
        <div className="bg-white grid grid-cols-1 md:grid-cols-5 gap-4 w-8/12 sm:w-9/12 px-4 py-8 shadow-lg">
          <div className="flex justify-center items-cente col-span-2">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-72 h-72 object-cover shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between col-span-2">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Preço: R${product.price}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                {product.description}
              </p>
            </div>
            <Link
              href="/minhaloja/carrinho"
              className="flex items-center justify-center p-2 gap-2 bg-black text-white rounded-lg"
            >
              <FiPlusCircle />
              Adicionar ao carrinho
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
