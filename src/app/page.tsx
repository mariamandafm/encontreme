"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-red-500 w-full h-full">
      <header className="flex">
        <Image src="/logo.svg" alt="EncontreMe" width={200} height={100} />
        <button className="bg-black w-10 px-4 py-2">Entrar</button>
      </header>
    </div>
  );
}


