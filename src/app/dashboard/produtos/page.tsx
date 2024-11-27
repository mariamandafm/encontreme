"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const produtos = [
  { id: 1, nome: 'Espelhamento de Pintura', preco: 150.00 },
  { id: 2, nome: 'Vitrificação', preco: 200.00 },
  { id: 3, nome: 'Vitrificação', preco: 220.00 },
  { id: 4, nome: 'Vitrificação', preco: 1200.00 },
  { id: 5, nome: 'Vitrificação', preco: 30.00 },
  { id: 6, nome: 'Vitrificação', preco: 2400.00 },
  { id: 7, nome: 'Vitrificação', preco: 230.00 },
  { id: 8, nome: 'Vitrificação', preco: 400.00 },
  { id: 9, nome: 'Vitrificação', preco: 2100.00 },
  { id: 10, nome: 'Vitrificação', preco: 600.00 },
  { id: 11, nome: 'Vitrificação', preco: 100.00 },
];

export default function Produtos() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 10;

  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = indiceInicial + produtosPorPagina;
  const produtosPagina = produtos.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

  const mudarPagina = (novaPagina: number) => {
    if (novaPagina > 0 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <>
      <div className="flex justify-between mx-12 mt-12">
        <h1 className="text-2xl font-medium">Produtos</h1>
        <div className="flex flex-row gap-4">
          <button className="bg-black px-6 py-1 rounded-3xl hover:bg-zinc-800 duration-75 transition-colors">
            <p className="text-white">Novo Produto</p>
          </button>
        </div>
      </div>
      <div className="flex bg-white mx-12 mt-7 mb-7 p-7 rounded-3xl h-full flex-col">
        <div>
          <input className="w-5 h-5 ml-3 border-gray-600 accent-black border-2" type="checkbox" name="" id="" />
        </div>
        {produtosPagina.map((produto) => {
          const preco = produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

          return (
            <div key={produto.id} className="w-full bg-box hover:bg-gray-100 mt-3 p-3 flex justify-between items-center rounded-xl">
              <div className="flex items-center">
                <input className="w-5 h-5 border-gray-600 accent-black border-2" type="checkbox" name="" id="" />
                <Image
                  className="ml-4 h-10 w-10 object-fill rounded-lg"
                  src="/produto_exemplo01.png"
                  alt="Imagem de Vitrificação"
                  height={80}
                  width={80}
                />
                <p className="ml-4">{produto.nome}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4 text-lg">{preco}</p>
                <FiEdit size={26} />
              </div>
            </div>
          );
        })}

        {/* Controles de Paginação */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            className={`px-4 py-2 rounded-l-md ${paginaAtual === 1 ? 'bg-gray-300' : 'bg-black text-white hover:bg-zinc-800'}`}
          >
            Anterior
          </button>
          <span className="px-4 py-2 bg-gray-100">{`Página ${paginaAtual} de ${totalPaginas}`}</span>
          <button
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
            className={`px-4 py-2 rounded-r-md ${paginaAtual === totalPaginas ? 'bg-gray-300' : 'bg-black text-white hover:bg-zinc-800'}`}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
}
