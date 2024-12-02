"use client";

import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Plano() {
  return (
    <>
      <div className="mx-12 mt-8 h-screen">
        <div className="flex justify-between mb-3">
          <div className="flex justify-between w-full">
            <h2 className="text-2xl">Planos</h2>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-3 max-lg:grid-cols-1 justify-between w-full gap-14 mt-8 h-[38rem]">
          {/* Card Gratuito */}
          <div className="w-full p-50 bg-white rounded-2xl flex flex-col h-full">
            <div className="bg-[#0C5E84] w-full p-2 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl">
              <p className="text-white text-xl">Gratuito</p>
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl">Gratuito</p>
                <p className="text-lg mt-2">Para iniciantes</p>
                <p className="text-4xl mt-4">GRATUITO</p>
                <p className="text-lg">para sempre</p>
                <div className="h-[1px] w-full mt-6 bg-black"></div>
                <p className="text-lg mt-4">Produtos</p>
                <div className="flex items-center mt-2">
                  <FiCheck className="mr-2" />
                  Até 15 produtos
                </div>
                <div className="flex items-center mt-2">
                  <FiCheck className="mr-2" />
                  Até 3 coleções
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <button className="px-4 py-2 bg-box rounded-full w-full">Atual</button>
              </div>
            </div>
          </div>

          {/* Card Espacial */}
          <div className="w-full p-50 bg-white rounded-2xl flex flex-col h-full">
            <div className="bg-[#0C5E84] w-full p-2 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl">
              <p className="text-white text-xl">R$ 5,00 no primeiro mês</p>
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <p className="text-2xl">Espacial</p>
              <p className="text-lg mt-2">Para empreendedores em crescimento</p>
              <p className="text-4xl mt-4">R$19,00</p>
              <p className="text-lg">por mês</p>
              <div className="h-[1px] w-full mt-6 bg-black"></div>
              <p className="text-lg mt-4">Produtos</p>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Até 100 produtos
              </div>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Até 15 coleções
              </div>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Comparação de Preço
              </div>
              <p className="text-lg mt-4">Personalização</p>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Link personalizável - /minhaloja
              </div>

              <div className="flex items-center justify-center mt-6">
                <button className="px-4 py-2 bg-black text-white rounded-full w-full">Começar Agora</button>
              </div>
            </div>
          </div>

          {/* Card Estelar */}
          <div className="w-full p-50 bg-white rounded-2xl flex flex-col h-full">
            <div className="bg-[#0C5E84] w-full p-2  flex items-center justify-center rounded-tl-2xl rounded-tr-2xl">
              <p className="text-white text-xl">R$ 5,00 no primeiro mês</p>
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <p className="text-2xl">Estelar</p>
              <p className="text-lg mt-2">Para empreendedores que querem vender mais</p>
              <p className="text-4xl mt-4">R$39,00</p>
              <p className="text-lg">por mês</p>
              <div className="h-[1px] w-full mt-6 bg-black"></div>
              <p className="text-lg mt-4">Produtos</p>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Produtos ilimitados
              </div>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Coleções ilimitadas
              </div>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Comparação de Preço
              </div>
              <p className="text-lg mt-4">Personalização</p>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Modelos ilimitados
              </div>
              <div className="flex items-center mt-2">
                <FiCheck className="mr-2" />
                Link personalizável - /minhaloja
              </div>
              <div className="flex items-center justify-center mt-6">
                <button className="px-4 py-2 bg-black text-white rounded-full w-full">Começar Agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
