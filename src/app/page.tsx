"use client"

import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Home() {
  return (
    <section className="mx-48">
      <header className="flex justify-between items-center my-10">
        <Image src="/logo.svg" alt="EncontreMe" width={200} height={100} />
        <Link href="/login" className="bg-black text-white px-8 py-2 rounded-full text-lg hover:bg-gray-900">Entrar</Link>
      </header>
      <h2 className="text-6xl mt-[10%]">Negócios inovadores,<br />precisam ser encontrados.</h2>
      <Link href="/login" className="mt-10 w-56 flex items-center bg-black text-white px-8 py-2 rounded-full text-lg hover:bg-gray-900">Começar Agora
        <FiLogIn className="ml-2" size={20} />
      </Link>
      <div className="flex items-end absolute bottom-0">
        <div className="w-72 h-40 bg-black" />
        <div className="w-72 h-52 bg-primaryBlue" />
      </div>
      <Image className="absolute right-48 bottom-0" src="/login_star.svg" height={800} width={450} alt="Ilustração de azul subindo." />


    </section>
  );
}


