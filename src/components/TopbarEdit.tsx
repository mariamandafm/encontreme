"use client";

import React from "react";
import "../styles/globals.css";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const TopbarEdit = ({ data }: { data: any }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  function transformData(data:any) {
    const resultado: {
      title?: string;
      logo?: string;
      icon?: string;
      bannerImage?: string;
      bannerTitle?: string;
      presentationImage?: string;
      presentationDescription?: string;
      idCollection?: number;
      productsTitle?: string;
      facebookLink?: string;
      instagramLink?: string;
      youtubeLink?: string;
      address?: string;
      contact?: string;
      sections?: any[];
    } = {};
    if (data.geral) {
      if (data.geral.title) resultado.title = data.geral.title;
      if (data.geral.logo) resultado.logo = data.geral.logo;
      if (data.geral.icon) resultado.icon = data.geral.icon;
    }
    if (data.banner) {
      if (data.banner.bannerImage)
        resultado.bannerImage = data.banner.bannerImage;
      if (data.banner.bannerTitle)
        resultado.bannerTitle = data.banner.bannerTitle;
    }
    if (data.apresentacao) {
      if (data.apresentacao.presentationImage)
        resultado.presentationImage = data.apresentacao.presentationImage;
      if (data.apresentacao.presentationDescription)
        resultado.presentationDescription =
          data.apresentacao.presentationDescription;
    }
    if (data.produtos) {
      if (data.produtos.idCollection !== undefined)
        resultado.idCollection = data.produtos.idCollection;
      if (data.produtos.productsTitle)
        resultado.productsTitle = data.produtos.productsTitle;
    }
    if (data.rodape) {
      if (data.rodape.facebookLink)
        resultado.facebookLink = data.rodape.facebookLink;
      if (data.rodape.instagramLink)
        resultado.instagramLink = data.rodape.instagramLink;
      if (data.rodape.youtubeLink)
        resultado.youtubeLink = data.rodape.youtubeLink;
      if (data.rodape.address) resultado.address = data.rodape.address;
      if (data.rodape.contact) resultado.contact = data.rodape.contact;
    }
    resultado.sections =  data.sections || [];

    return resultado;
  }

  const handleSave = async () => {
    const payload = transformData(data);

    const response = await fetch("/api/page/10", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      router.push("/minhaloja");
    } else {
      console.error("Erro ao salvar os dados:", await response.json());
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 text-white bg-black z-10 flex items-center px-4 justify-between">
      <div>
        <button
          onClick={handleBack}
          className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box"
        >
          <FiArrowLeft />
          Voltar
        </button>
      </div>
      <div className="flex gap-2">
        <Link
          href="/minhaloja"
          className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box"
        >
          Ver
        </Link>
        <button
          onClick={handleSave}
          className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box"
        >
          Salvar
        </button>
      </div>
    </nav>
  );
};

export default TopbarEdit;
