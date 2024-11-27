"use client";

import React, { useState } from "react";
import Input from "../../../../components/FormInput";
import Select from "../../../../components/SelectInput";
import { FiArrowLeft, FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NovaColecao = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [produtos, setProdutos] = useState([{ id: 1, nome: "Vitrificação", imagem: "/produto_exemplo01.png" },]);
  const [produtosDisponiveis] = useState([
    { id: 2, nome: "Espelhamento de pintura", imagem: "/produto_exemplo01.png" },
    { id: 3, nome: "Hidratação de bancos de couro", imagem: "/produto_exemplo01.png" },
    { id: 4, nome: "Polimento Técnico", imagem: "/produto_exemplo01.png" },
    { id: 5, nome: "Lavagem a Seco", imagem: "/produto_exemplo01.png" },
  ]);
  const [produtosSelecionadosModal, setProdutosSelecionadosModal] = useState<number[]>([]);
  const [produtosSelecionados, setProdutosSelecionados] = useState<number[]>([]);
  const [confirmModal, setConfirmModal] = useState(false);

  const router = useRouter();

  const removerProdutoSelecionado = () => {
    setProdutos((prevProdutos) =>
      prevProdutos.filter((produto) => !produtosSelecionados.includes(produto.id))
    );
    setProdutosSelecionados([]); // Limpa a seleção após remover
    setConfirmModal(false); // Fecha o modal de confirmação
  };

  const handleCheckboxChange = (id: number) => {
    setProdutosSelecionados((prevSelecionados) =>
      prevSelecionados.includes(id)
        ? prevSelecionados.filter((produtoId) => produtoId !== id) // Remove se já estiver selecionado
        : [...prevSelecionados, id] // Adiciona se não estiver selecionado
    );
  };

  const handleAdicionarProdutos = () => {
    const novosProdutos = produtosDisponiveis.filter(
      (produto) => produtosSelecionadosModal.includes(produto.id)
    );

    setProdutos((prevProdutos) => {
      const idsExistentes = prevProdutos.map((produto) => produto.id);
      // Adiciona apenas os produtos que não estão na lista atual
      const produtosUnificados = novosProdutos.filter(
        (produto) => !idsExistentes.includes(produto.id)
      );
      return [...prevProdutos, ...produtosUnificados];
    });

    setProdutosSelecionadosModal([]); // Limpa a seleção do modal
    setShowAddProductModal(false); // Fecha o modal
  };

  const handleCheckboxChangeModal = (id: number) => {
    setProdutosSelecionadosModal((prevSelecionados) =>
      prevSelecionados.includes(id)
        ? prevSelecionados.filter((produtoId) => produtoId !== id)
        : [...prevSelecionados, id]
    );
  };

  return (
    <>
      <div className="mx-12 mt-8">
        <div className="flex justify-between mb-3">
          <div className="flex justify-between w-full">
            <button
              onClick={() => router.back()}
              className="bg-white hover:bg-gray-200 rounded-full py-1 px-4 flex items-center"
            >
              <FiArrowLeft size={18} />
              <p className="text-black ml-2">Voltar</p>
            </button>

            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white mr-2 hover:bg-gray-200 rounded-full py-1 px-4"
              >
                <p className="text-red-900">Remover Coleção</p>
              </button>

              <button className="bg-white hover:bg-gray-200 rounded-full py-1 px-4">
                <p className="text-black">Salvar Coleção</p>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-10 items-start mt-8">
          <div className="col-span-3 flex flex-col gap-10">
            <div className="bg-white rounded-3xl p-7">
              <Input placeholder="Digite o nome da coleção">Nome da Coleção</Input>

              <div className="flex justify-between items-center mt-6">
                <p className="font-medium">Produtos</p>
                <div className="flex items-center gap-2">
                  {produtosSelecionados.length > 0 && (
                    <button
                      onClick={() => setConfirmModal(true)} // Exibir modal de confirmação
                      className="bg-box text-red-900 rounded-full py-1 px-3 hover:bg-gray-200"
                    >
                      Remover
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setShowAddProductModal(true);
                    }}
                    className="bg-box hover:bg-gray-200 rounded-full py-1 px-4 flex items-center"
                  >
                    <p className="text-black ml-2">Adicionar Produtos</p>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {produtos.map((produto) => (
                  <div
                    key={produto.id}
                    className={`flex justify-between items-center bg-box rounded-lg p-3 mb-3 ${produtosSelecionados.includes(produto.id) ? "border-2 border-black" : ""
                      }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-gray-600 accent-black border-2 mr-4"
                        checked={produtosSelecionados.includes(produto.id)}
                        onChange={() => handleCheckboxChange(produto.id)}
                      />
                      <Image
                        height={100}
                        width={100}
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-10 h-10 rounded-md object-cover mr-4"
                      />
                      <p>{produto.nome}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiEye stroke="#C4C4C4" size={24} className="cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-3xl p-7">
            <Select title="Visibilidade">
              <option>Rascunho</option>
              <option>Publicado</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {confirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 items-center flex flex-col text-center">
            <h2 className="text-2xl font-medium mb-4">Remover Produtos</h2>
            <p className="mb-6">
              Tem certeza de que deseja remover os produtos selecionados? Essa ação não pode ser
              desfeita.
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setConfirmModal(false)} // Fechar o modal
                className="bg-black text-white py-1 px-3 rounded-full hover:bg-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={removerProdutoSelecionado} // Confirmar a remoção
                className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Remoção da Coleção */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 items-center flex flex-col text-center">
            <h2 className="text-2xl font-medium mb-4">Remover Coleção</h2>
            <p className="mb-10">
              Tem certeza de que deseja remover esta coleção? Essa ação não pode ser desfeita.
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)} // Fechar o modal
                className="bg-black text-white py-1 px-3 rounded-full hover:bg-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={() => router.back()} // Confirmar a ação de remoção
                className="bg-red-500 ml-2 text-white py-1 px-3 rounded-full hover:bg-red-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Modal de Adicionar Produtos */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-5">
            <h2 className="text-xl font-medium mb-4">Adicionar Produtos</h2>
            <div className="overflow-y-auto max-h-60">
              {produtosDisponiveis
                .filter((produto) => !produtos.some((p) => p.id === produto.id)) // Filtra os produtos já selecionados
                .map((produto) => (
                  <div
                    onClick={() => handleCheckboxChangeModal(produto.id)}
                    key={produto.id}
                    className="flex items-center justify-between mb-3 bg-box p-2 rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-600 accent-black border-2 mr-4"
                        checked={produtosSelecionadosModal.includes(produto.id)}
                        onChange={() => null}
                      />
                      <Image
                        height={100}
                        width={100}
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-10 h-10 rounded-md object-cover mr-4"
                      />
                      <p>{produto.nome}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex w-full justify-end mt-6">
              <button
                onClick={() => setShowAddProductModal(false)} // Fecha o modal
                className="bg-box text-red-900 py-1 px-4 rounded-full hover:bg-gray-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdicionarProdutos} // Adiciona os produtos selecionados
                className="bg-black text-white ml-2 py-1 px-4 rounded-full hover:bg-gray-800"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NovaColecao;
