"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-primary flex">
      <div className="w-1/2 h-full flex items-center justify-center flex-col">
        <Image src="/logo.svg" height={100} width={200} alt="Logo EncontreMe." />

        <Image src="/send.svg" height={120} width={120} alt="" className="mt-8"></Image>

        <p className="w-80 mt-8">
          Enviamos um email para usuario@gmail.com com as instruções para mudança de senha
        </p>

        <p className="w-80 mt-2 text-center text-stone-500 text-sm">
          Caso não tenha recebido, verifique sua caixa de spam ou tente novamente
        </p>

        <Link href="/login" className="underline mt-6">Voltar para o Login</Link>
      </div>

      <div className="relative w-1/2 h-auto flex items-center justify-center p-16">
        <div className="bg-[#0C5E84] w-full h-full rounded-3xl p-10 flex justify-between flex-col">
          <h3 className="text-white text-5xl w-[90%]">O futuro do seu negócio começa aqui.</h3>
          <p className="text-white text-2xl w-2/3">Com nossa plataforma, você cria seu site em minutos e leva seu negócio mais longe.</p>
          <Image className="w-full" src="/card_login.svg" width={1200} height={400} alt="Card Incentivador - Construa seu site hoje mesmo e veja o seu negócio crescer." />
        </div>
      </div>
    </div>
  )
}