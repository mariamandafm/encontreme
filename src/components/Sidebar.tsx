"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import {
  FiHome,
  FiShoppingCart,
  FiCornerDownRight,
  FiShoppingBag,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="font-logo text-lg fixed top-16 left-0 h-screen w-64 bg-white flex flex-col rounded-tl-3xl p-5 justify-between">
      <div className="flex flex-col gap-1 ">
        <Link href="/dashboard" className={`flex items-center gap-2 p-2 ${isActive('/dashboard') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiHome className="text-xl" />
          Página Inicial
        </Link>
        <Link href="/dashboard/produtos" className={`flex items-center gap-2 p-2 ${isActive('/dashboard/produtos') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiShoppingCart className="text-xl" />
          Produtos
        </Link>
        <Link href="#" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiCornerDownRight className="text-xl" />
          Coleções
        </Link>
        <Link href="/dashboard/minha-loja" className={`flex items-center gap-2 p-2 ${isActive('/dashboard/minha-loja') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiShoppingBag className="text-xl" />
          Minha Loja
        </Link>
        <Link href="#" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiCornerDownRight className="text-xl" />
          Editar Loja
        </Link>
        <Link href="#" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiCornerDownRight className="text-xl" />
          Modelos
        </Link>
        <Link href="#" className={`flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiDollarSign className="text-xl" />
          Meu Plano
        </Link>
      </div>
      <div>
        <Link href="#" className={`flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
          <FiSettings className="text-xl" />
          Configurações
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;