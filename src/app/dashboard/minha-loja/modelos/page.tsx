"use client";

import React, { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import Image from "next/image";

import Link from "next/link";

const Modelos = () => {
  return (
    <div className="md:p-10 p-4">
      <div className="flex justify-between pb-3">
        <h1 className="text-2xl font-medium">Modelos</h1>
      </div>
      <div className="bg-white w-full rounded-3xl md:p-12 p-4">
        <div className="bg-box rounded-3xl">
          <div className="relative w-full h-[200px] overflow-hidden rounded-3xl">
            <Image
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              alt="Preview do modelo"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex justify-between p-5">
            <div>
                <h1 className="text-3xl">Sépia</h1>
                <p>Tipo: Catálogo de Produtos</p>
                <p>Plano: Gratuito</p>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-white text-xl px-4 py-2 rounded-3xl hover:text-secondaryBlue">Visualizar</button>
                <button className="bg-white text-xl px-4 py-2 rounded-3xl border-black border-solid border-2">Atual</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelos;
