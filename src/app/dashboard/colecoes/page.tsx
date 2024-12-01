"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiEdit } from 'react-icons/fi';

const initialColecoes = [
  { "id": 1, "nome": "Xícaras", "totalProdutos": 2 },
  { "id": 2, "nome": "Mais Vendidos", "totalProdutos": 5 },
  { "id": 3, "nome": "Cozinha", "totalProdutos": 10 },
  { "id": 4, "nome": "Escritório", "totalProdutos": 7 },
  { "id": 5, "nome": "Decoração", "totalProdutos": 12 },
  { "id": 6, "nome": "Banheiro", "totalProdutos": 4 },
  { "id": 7, "nome": "Quarto", "totalProdutos": 8 },
  { "id": 8, "nome": "Sala", "totalProdutos": 6 },
  { "id": 9, "nome": "Promoções", "totalProdutos": 3 },
  { "id": 10, "nome": "Novidades", "totalProdutos": 9 },
  { "id": 11, "nome": "BlackFriday", "totalProdutos": 9 }
]

export default function Colecoes() {
  const [colecoes, setColecoes] = useState(initialColecoes);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const colecoesPorPagina = 10;

  const indiceInicial = (paginaAtual - 1) * colecoesPorPagina;
  const indiceFinal = indiceInicial + colecoesPorPagina;
  const colecoesPagina = colecoes.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(colecoes.length / colecoesPorPagina);

  const mudarPagina = (novaPagina: number) => {
    if (novaPagina > 0 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  const toggleSelecionado = (id: number) => {
    setSelecionados((prevSelecionados) =>
      prevSelecionados.includes(id)
        ? prevSelecionados.filter((item) => item !== id)
        : [...prevSelecionados, id]
    );
  };

  const toggleSelecionarTodos = () => {
    const idsPaginaAtual = colecoesPagina.map((colecao) => colecao.id);
    const todosSelecionados = idsPaginaAtual.every((id) => selecionados.includes(id));

    setSelecionados((prevSelecionados) =>
      todosSelecionados
        ? prevSelecionados.filter((id) => !idsPaginaAtual.includes(id))
        : [...prevSelecionados, ...idsPaginaAtual.filter((id) => !prevSelecionados.includes(id))]
    );
  };

  const removerSelecionados = () => {
    setColecoes((prevColecoes) => prevColecoes.filter((colecao) => !selecionados.includes(colecao.id)));
    setSelecionados([]);
    setShowModal(false);
  };

  const todosSelecionados = colecoesPagina.every((colecao) => selecionados.includes(colecao.id));

  return (
    <>
      <div className="flex justify-between mx-4 mt-4 md:mx-12 md:mt-8">
        <h1 className="text-2xl font-medium">Coleções</h1>
        <div className="flex flex-row gap-4">
          <button onClick={() => router.push("/dashboard/colecoes/novo")} className="bg-black px-6 py-1 rounded-3xl hover:bg-zinc-800 duration-75 transition-colors">
            <p className="text-white">Nova Coleção</p>
          </button>
        </div>
      </div>
      <div className="flex bg-white mx-4 md:mx-12 mt-7 mb-7 p-7 rounded-3xl h-full flex-col">
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center">
            <input
              className="w-5 h-5 ml-3 border-gray-600 accent-black border-2"
              type="checkbox"
              checked={todosSelecionados}
              onChange={toggleSelecionarTodos}
            />
            <p className="ml-3">Selecionar Todas</p>
          </div>

          {selecionados.length > 0 && (
            <button
              onClick={() => setShowModal(true)}
              className="bg-box hover:bg-gray-200 rounded-full py-1 px-4"
            >
              <p className="text-red-900">
                {selecionados.length > 1 ? 'Remover Coleções' : 'Remover Coleção'}
              </p>
            </button>
          )}
        </div>
        {colecoesPagina.map((colecao) => {
          const isSelecionado = selecionados.includes(colecao.id);

          return (
            <div
              key={colecao.id}
              className={`w-full bg-box hover:bg-gray-100 mt-3 p-3 flex justify-between items-center rounded-xl cursor-pointer ${isSelecionado ? 'border border-black' : ''}`}
            >
              <div className="flex items-center">
                <input
                  className="w-5 h-5 border-gray-600 accent-black border-2"
                  type="checkbox"
                  checked={isSelecionado}
                  onChange={() => toggleSelecionado(colecao.id)}
                />
                <p className="ml-4">{colecao.nome}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4 text-lg">{colecao.totalProdutos} produtos</p>
                <FiEdit size={26} />
              </div>
            </div>
          );
        })}

        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            className={`h-8 w-8 rounded-lg flex items-center justify-center ${paginaAtual === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
              }`}
          >
            <FiChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
            <button
              key={numero}
              onClick={() => mudarPagina(numero)}
              className={`h-8 w-8 rounded-lg ${numero === paginaAtual ? 'bg-black text-white' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                }`}
            >
              <p className="text-lg">{numero}</p>
            </button>
          ))}
          <button
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
            className={`h-8 w-8 rounded-lg flex items-center justify-center ${paginaAtual === totalPaginas ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
              }`}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 items-center flex flex-col text-center">
            <h2 className="text-2xl font-medium mb-4">Remover Coleções</h2>
            <p className="mb-10">
              Tem certeza de que deseja remover as coleções selecionadas?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white py-1 px-3 rounded-full hover:bg-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={removerSelecionados}
                className="bg-red-500 ml-2 text-white py-1 px-3 rounded-full hover:bg-red-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
