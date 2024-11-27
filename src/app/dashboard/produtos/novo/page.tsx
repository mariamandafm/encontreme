"use client";

import React, { useState } from 'react';
import Input from '../../../../components/FormInput';
import Select from '../../../../components/SelectInput';
import TextArea from '../../../../components/FormTextArea';
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const NovoProduto = () => {
  const [showModal, setShowModal] = useState(false);
  const [priceCompare, setPriceCompare] = useState(false);

  const router = useRouter();
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
              <p className="text-black ml-2">
                Voltar
              </p>
            </button>

            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white mr-2 hover:bg-gray-200 rounded-full py-1 px-4"
              >
                <p className="text-red-900">
                  Descartar Produto
                </p>
              </button>

              <button
                onClick={() => { }}
                className="bg-white hover:bg-gray-200 rounded-full py-1 px-4"
              >
                <p className="text-black">
                  Salvar Produto
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-10 items-start mt-8">
          <div className="col-span-3 flex flex-col gap-10">
            <div className="bg-white rounded-3xl p-7">
              <Input placeholder="Digite o nome do produto">Nome do Produto</Input>

              <p className="font-medium mt-6">Mídia do Produto</p>
              <div className='mt-2 p-4 bg-box h-32 w-full rounded-md'>
                <button className='bg-white h-full w-24 rounded-lg border-gray-200 border-dashed border-2 items-center justify-center flex'><FiPlusCircle size={28} stroke='#E3E3E3' /></button>
              </div>

              <div className='mt-6'>
                <TextArea placeholder="Digite a descrição do produto">
                  Descrição do Produto
                </TextArea>
              </div>

            </div>
          </div>


          <div className="col-span-2 bg-white rounded-3xl p-7">
            <Select title="Visibilidade">
              <option>Rascunho</option>
              <option>Publicado</option>
            </Select>
            <div className='mt-6 flex'>
              <div className='w-full'>
                <Input placeholder='R$ 9,99'>Preço do Produto</Input>
              </div>
              {priceCompare && (
                <div className='ml-4 w-full'>
                  <Input placeholder='R$ 2,99'>Preço Promocional</Input>
                </div>
              )}
            </div>

            <div className='flex mt-2 items-center'>
              <input type="checkbox" checked={priceCompare} name="priceCompare" id="priceCompare" onChange={() => setPriceCompare(!priceCompare)} className="w-4 h-4 border-gray-600 accent-black border-2" />
              <p className='ml-2'>Comparação de Preço</p>
            </div>

            <div className='mt-6'>
              <Input placeholder='Digite o nome de uma coleção'>Coleções</Input>
            </div>

          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 items-center flex flex-col text-center">
            <h2 className="text-2xl font-medium mb-4">Descartar Produto</h2>
            <p className="mb-10">
              Tem certeza de que deseja descartar o produto atual?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)} // Fechar o modal
                className="bg-black text-white py-1 px-3 rounded-full hover:bg-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={() => router.back()} // Confirmar a ação de descarte
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
