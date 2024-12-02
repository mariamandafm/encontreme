"use client"

import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Chat() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-48 bg-white w-full">
        <Image src="/logo.svg" alt="EncontreMe" width={200} height={100} />
        <Link href="/login" className="bg-black text-white px-8 py-2 rounded-full text-lg hover:bg-gray-900">Encerrar Chat</Link>
      </header>

      <div className="my-10 mx-80" >

        <div className="bg-white rounded-lg p-8">
          <div className="flex gap-6">
          <Image src="/Chat.png" alt="" width={40} height={40} className ="object-contain"/>

          <div>
            <p>Olá,</p>
            <p>Vamos iniciar a configuração do seu site.</p>
            <p>Primeiro, qual é o nome do seu negócio?</p>
          </div>
          </div>
        </div>

        <div className="flex gap-6 mt-72">
          <input
            type="text"
            placeholder="Insira o nome do seu negócio"
            className="flex-1 border rounded-full py-2 px-4 shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            className="bg-black text-white rounded-full ml-2 p-3 flex items-center justify-center hover:bg-gray-800 w-12 h-12"
            aria-label="Enviar"
            >
            ↑
          </button>
        </div>
      </div>

      <div className="mt-10 mx-48 flex">
          
        </div>
    </>
  );
}