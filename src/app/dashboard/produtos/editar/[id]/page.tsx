"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/FormInput";
import Select from "@/components/SelectInput";
import TextArea from "@/components/FormTextArea";
import { FiArrowLeft, FiPlusCircle, FiXCircle } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../../../../../contexts/AuthContext";
import { Product } from "@prisma/client";

const Editar = () => {
  const { userId } = useAuth();
  const { id } = useParams<{ id: string }>() || {};
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [priceCompare, setPriceCompare] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    pricePromotion: "",
    visibility: "Rascunho",
    description: "",
    imageURL: "",
    idCollection: "",
  });

  // 🛠 Busca os dados do produto na API ao carregar a página
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();

        if (!response.ok || !data) {
          console.error("Erro ao buscar produto:", data.error || "Produto não encontrado");
          router.push("/dashboard/produtos");
          return;
        }

        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        router.push("/dashboard/produtos");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, router]);

  // 🛠 Atualiza formData quando `product` for carregado
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price ? product.price.toString() : "",
        pricePromotion: product.pricePromotion ? product.pricePromotion.toString() : "",
        visibility: product.visibility ? "Publicado" : "Rascunho",
        description: product.description || "",
        imageURL: product.imageURL || "",
        idCollection: product.idCollection ? product.idCollection.toString() : "",
      });

      setImagePreview(product.imageURL);
      setPriceCompare(product.compare);
    }
  }, [product]); // 🔥 Atualiza somente quando `product` muda

  if (loading) return <p className="text-center mt-8">Carregando...</p>;
  if (!product) return null;

  // 🛠 Atualiza estado do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🛠 Lida com upload de imagem
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // 🛠 Atualiza os dados do produto na API
  const handleUpdate = async () => {
    if (!userId) {
      alert("Usuário não autenticado. Faça login para continuar.");
      return;
    }

    try {
      let uploadedImageUrl = formData.imageURL;

      if (imageFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("image", imageFile);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formDataUpload,
        });

        const uploadData = await uploadResponse.json();
        uploadedImageUrl = uploadData.imageUrl;
      }

      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idUser: userId,
          name: formData.name,
          price: parseFloat(formData.price),
          pricePromotion: formData.pricePromotion ? parseFloat(formData.pricePromotion) : null,
          visibility: formData.visibility === "Publicado",
          description: formData.description,
          imageURL: uploadedImageUrl,
          idCollection: formData.idCollection ? parseInt(formData.idCollection) : null,
        }),
      });

      if (response.ok) {
        router.push("/dashboard/produtos");
      } else {
        alert("Erro ao atualizar o produto.");
      }
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto.");
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
                onClick={handleUpdate}
                className="bg-white hover:bg-gray-200 rounded-full py-1 px-4"
              >
                <p className="text-black">
                  Salvar Produto
                </p>
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

              <p className="font-medium mt-6">Mídia do Produto</p>

              <label className="mt-2 p-4 bg-box h-32 w-full rounded-md flex items-center justify-center cursor-pointer">
                <input type="file" className="hidden" onChange={handleImageUpload} />

                {imagePreview ? (
                  <div className="relative">
                    <Image width={100} height={100} src={imagePreview} alt="Prévia da Imagem" className="h-28 w-28 object-cover rounded-lg" />
                    <FiXCircle
                      className="absolute -top-2 -right-2 cursor-pointer text-red-600"
                      size={24}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                    />
                  </div>
                ) : (
                  <FiPlusCircle size={28} stroke="#E3E3E3" />
                )}
              </label>

              <div className='mt-6'>
                <TextArea onChange={handleChange} defaultValue={product.description} placeholder="Digite a descrição do produto">
                  Descrição do Produto
                </TextArea>
              </div>

            </div>
          </div>


          <div className="md:col-span-2 bg-white rounded-3xl p-7">
            <Select defaultValue={Boolean(product.visibility) ? "Publicado" : "Rascunho"} title="Visibilidade">
              <option>Rascunho</option>
              <option>Publicado</option>
            </Select>
            <div className='mt-6 flex'>
              <div className='w-full'>
                <Input defaultValue={product.price} placeholder='R$ 9,99'>Preço do Produto</Input>
              </div>
              {priceCompare && (
                <div className='ml-4 w-full'>
                  <Input defaultValue={String(product.pricePromotion)} placeholder='R$ 2,99'>Preço Promocional</Input>
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
      </div >

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
      )
      }
    </>
  );
};

export default Editar;
