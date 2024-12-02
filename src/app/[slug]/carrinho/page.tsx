"use client";

import Footer from "@/components/basic-template/sections/Footer";
import Navbar from "@/components/basic-template/sections/Navbar";
import Link from "next/link";
import React from "react";

export default function CartPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-4 md:mt-12 h-screen font-sans mb-4 mt:mb-14">
        <div className=" grid grid-cols-1 md:gap-12 h-60 gap-5 md:grid-cols-5 w-11/12 mt:w-9/12">
          <div className="flex flex-col h-52 justify-start p-3 md:col-span-3 bg-white">
            <h1 className="text-2xl font-semibold text-gray-800">Carrinho</h1>
            <hr />
            <p>Nenhum item no carrinho</p>
          </div>

          <div className="flex flex-col h-48 justify-between md:col-span-2 p-3 bg-white">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Subtotal</h2>
              <p className="text-lg font-semibold">R$ 0,00</p>
            </div>
            <div className="flex justify-between">
              <h2 >Frete</h2>
              <p >+ R$ 0,00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Total</h2>
              <p className="text-lg font-semibold">R$ 0,00</p>
            </div>
            <Link
              href="#"
              className="flex items-center justify-center p-2 mt-4 bg-black text-white"
            >
              Finalizar pedido
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
