"use client"

import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Home() {
  return (
    <section className="mx-6 sm:mx-20 lg:mx-32 xl:mx-48 flex flex-col h-screen justify-between">
      <div>
        <header className="flex justify-between items-center my-10">
          <Image src="/logo.svg" alt="EncontreMe" width={200} height={100} />
          <Link href="/login" className="bg-black text-white px-8 py-2 rounded-full text-lg hover:bg-gray-900">Entrar</Link>
        </header>
        <div className="mt-28">
          <h2 className="text-6xl">Negócios inovadores,<br />precisam ser encontrados.</h2>
          <Link href="/login" className="mt-10 w-56 flex items-center bg-black text-white px-8 py-2 rounded-full text-lg hover:bg-gray-900">Começar Agora
            <FiLogIn className="ml-2" size={20} />
          </Link>
        </div>
      </div>


      <div className="flex w-full  items-end z-10">
        <div className="w-full h-28 sm:w-72 sm:h-40 bg-black" />
        <div className="w-full h-36 sm:w-72 sm:h-52 bg-primaryBlue" />
      </div>

      <Image className="w-[45%] bottom-36 lg:bottom-0 lg:w-min absolute right-6 object-contain sm:right-20 lg:right-32 xl:right-48  z-0" src="/login_star.svg" height={800} width={450} alt="Ilustração de azul subindo." />

    </section>
  );
}


