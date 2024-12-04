"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-primary flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full flex items-center justify-center flex-col my-20 md:my-0">
        <Image src="/logo.svg" height={100} width={200} alt="Logo EncontreMe." />

        <form className="w-80 mt-8" onSubmit={(e) => {
          e.preventDefault()
          router.push("/chat")
        }}>
          <label className="font-medium">Nome</label>
          <input type="email" placeholder="Maria da Silva" className="outline-black mt-2 w-full h-11 bg-white rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" />

          <div className="mt-4">
            <label className="font-medium">E-mail</label>
            <input type="password" placeholder="exemplo@gmail.com" className="outline-black mt-2 w-full h-11 bg-white rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" />
          </div>

          <div className="mt-4">
            <label className="font-medium">Senha</label>
            <input type="password" placeholder="Digite sua senha" className="outline-black mt-2 w-full h-11 bg-white rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" />
          </div>

          <button type="submit" className="w-full bg-black px-4 py-3 mt-8 text-white rounded-full hover:bg-gray-900">Criar uma conta</button>

          <Link href="/login" className="flex mt-8 justify-center">
            Já tem uma conta? <p className="text-[#0C5E84] font-medium ml-2">Faça o Login</p>
          </Link>
        </form>
      </div>

      <div className="relative w-full md:w-1/2 h-auto flex items-center justify-center p-8 md:p-16">
        <div className="bg-[#0C5E84] w-full h-full rounded-3xl p-10 flex justify-between flex-col">
          <h3 className="text-white text-4xl lg:text-5xl w-full lg:w-[90%]">O futuro do seu negócio começa aqui.</h3>
          <p className="text-white text-xl lg:text-2xl w-full lg:w-2/3 my-8 md:my-0">Com nossa plataforma, você cria seu site em minutos e leva seu negócio mais longe.</p>
          <Image className="w-full" src="/card_login.svg" width={1200} height={400} alt="Card Incentivador - Construa seu site hoje mesmo e veja o seu negócio crescer." />
        </div>
      </div>
    </div>
  )
}
