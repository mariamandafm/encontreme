"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../../components/FormInput";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-primary flex">
      <div className="w-1/2 h-full flex items-center justify-center flex-col">
        <Image src="/logo.svg" height={100} width={200} alt="Logo EncontreMe." />
        <Link href="/register" className="flex mt-16">
          Ainda não tem uma conta? <p className="text-[#0C5E84] font-medium ml-2">Registre-se</p>
        </Link>

        <form className="w-80 mt-8">

          <label className="font-medium">E-mail</label>
          <input type="email" placeholder="exemplo@gmail.com" className="outline-black mt-2 w-full h-11 bg-white rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" />

          <div className="mt-4">
            <label className="font-medium">Senha</label>
            <input type="password" placeholder="Digite sua senha" className="outline-black mt-2 w-full h-11 bg-white rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" />
          </div>

          <button type="submit" className="w-full bg-black px-4 py-3 mt-8 text-white rounded-full hover:bg-gray-900">Entrar</button>
        </form>
        <Link href="/forgot" className="underline mt-6">Esqueci minha senha</Link>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center flex-col bg-blue-500 p-10">
        <svg className="w-full" viewBox="0 0 520 688" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C0 8.95432 8.95431 0 20 0H438.768C449.814 0 458.768 8.95431 458.768 20V45C458.768 56.0457 467.722 65 478.768 65H500C511.046 65 520 73.9543 520 85V668C520 679.046 511.046 688 500 688H20C8.95432 688 0 679.046 0 668V20Z" fill="#0C5E84" />
        </svg>
      </div>
    </div >
  )
}
