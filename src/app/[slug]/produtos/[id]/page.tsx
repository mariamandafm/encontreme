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
      const foundProduct = ceramicProducts.find((prod) => prod.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-screen mt-4 md:mt-12 font-sans mb-20">
        <div className="bg-white grid grid-cols-1 h-10/12 md:grid-cols-5 md:gap-4 w-11/12 md:w-11/12 px-4 py-8 shadow-lg h-[700px] md:h-[450px]">
          <div className="flex justify-center items-start col-span-2">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-96 h-96 object-cover shadow-md"
            />
          </div>
          <div className="flex flex-col justify-between col-span-2">
            <div className="mb-10">
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
