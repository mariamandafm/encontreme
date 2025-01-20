"use client";

import React, { useState } from 'react';
import Input from '../../../../components/FormInput';
import Select from '../../../../components/SelectInput';
import TextArea from '../../../../components/FormTextArea';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const NovoProduto = () => {
  const [showModal, setShowModal] = useState(false);
  const [priceCompare, setPriceCompare] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: "",
    pricePromotion: "",
    visibility: "Publicado",
    description: "",
    imageURL: "",
    idStore: "", // ID da loja do usuário (ajuste conforme necessário)
    idCollection: "",
  });

  const router = useRouter();

  // Função para atualizar os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para criar produto na API
  const handleSubmit = async () => {
    if (!formData.name || !formData.slug || !formData.price || !formData.imageURL || !formData.idStore) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          pricePromotion: formData.pricePromotion ? parseFloat(formData.pricePromotion) : null,
          visibility: formData.visibility === "Publicado",
          idStore: parseInt(formData.idStore),
          idCollection: formData.idCollection ? parseInt(formData.idCollection) : null,
        }),
      });

      if (response.ok) {
        alert("Produto criado com sucesso!");
        router.push("/dashboard/produtos");
      } else {
        alert("Erro ao criar produto.");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      alert("Erro ao criar produto.");
    }
  };

  return (
    <>
      <div className="mx-4 mt-4 md:mx-12 md:mt-8">
        <div className="flex justify-between mb-3">
          <div className="md:flex justify-between w-full">
            <button
              onClick={() => router.back()}
              className="bg-white hover:bg-gray-200 rounded-full py-1 px-4 flex items-center mb-2 md:mb-0"
            >
              <FiArrowLeft size={18} />
              <p className="text-black ml-2">Voltar</p>
            </button>

            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white mr-2 hover:bg-gray-200 rounded-full py-1 px-4"
              >
                <p className="text-red-900">Descartar Produto</p>
              </button>

              <button
                onClick={handleSubmit}
                className="bg-black hover:bg-gray-800 rounded-full py-1 px-4 text-white"
              >
                Salvar Produto
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-5 md:gap-10 items-start mt-8">
          <div className="md:col-span-3 flex flex-col gap-10">
            <div className="bg-white rounded-3xl p-7">
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Digite o nome do produto">
                Nome do Produto
              </Input>
              <Input name="slug" value={formData.slug} onChange={handleChange} placeholder="Digite um slug único">
                Slug do Produto
              </Input>

              <p className="font-medium mt-6">Mídia do Produto</p>
              <div className="mt-2 p-4 bg-box h-32 w-full rounded-md">
                <Input name="imageURL" value={formData.imageURL} onChange={handleChange} placeholder="URL da Imagem">
                  URL da Imagem
                </Input>
              </div>

              <div className="mt-6">
                <TextArea name="description" value={formData.description} onChange={handleChange} placeholder="Digite a descrição do produto">
                  Descrição do Produto
                </TextArea>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-7">
            <Select name="visibility" value={formData.visibility} onChange={handleChange} title="Visibilidade">
              <option value="Rascunho">Rascunho</option>
              <option value="Publicado">Publicado</option>
            </Select>

            <div className="mt-6 flex">
              <div className="w-full">
                <Input name="price" value={formData.price} onChange={handleChange} placeholder="R$ 9,99">
                  Preço do Produto
                </Input>
              </div>
              {priceCompare && (
                <div className="ml-4 w-full">
                  <Input name="pricePromotion" value={formData.pricePromotion} onChange={handleChange} placeholder="R$ 2,99">
                    Preço Promocional
                  </Input>
                </div>
              )}
            </div>

            <div className="flex mt-2 items-center">
              <input
                type="checkbox"
                checked={priceCompare}
                name="priceCompare"
                id="priceCompare"
                onChange={() => setPriceCompare(!priceCompare)}
                className="w-4 h-4 border-gray-600 accent-black border-2"
              />
              <p className="ml-2">Comparação de Preço</p>
            </div>

            <div className="mt-6">
              <Input name="idCollection" value={formData.idCollection} onChange={handleChange} placeholder="Digite o ID de uma coleção">
                ID da Coleção (Opcional)
              </Input>
            </div>

            <div className="mt-6">
              <Input name="idStore" value={formData.idStore} onChange={handleChange} placeholder="Digite o ID da loja">
                ID da Loja
              </Input>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 items-center flex flex-col text-center">
            <h2 className="text-2xl font-medium mb-4">Descartar Produto</h2>
            <p className="mb-10">Tem certeza de que deseja descartar o produto atual?</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white py-1 px-3 rounded-full hover:bg-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={() => router.back()}
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
};

export default NovoProduto;
