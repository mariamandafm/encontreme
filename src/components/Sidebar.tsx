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
    <div>
      {
        pathname == "/dashboard/minha-loja/editar"
          ? null
          :
          <aside className="font-logo h-[calc(100%-4rem)] text-lg fixed left-0 w-64 bg-white flex flex-col rounded-tl-3xl p-5 justify-between">
            <div className="flex flex-col gap-1">
              <Link href="/dashboard" className={`flex items-center gap-2 p-2 ${isActive('/dashboard') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiHome className="text-xl" />
                Página Inicial
              </Link>
              <Link href="/dashboard/produtos" className={`flex items-center gap-2 p-2 ${isActive('/dashboard/produtos') || isActive('/dashboard/produtos/novo') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiShoppingCart className="text-xl" />
                Produtos
              </Link>
              <Link href="/dashboard/colecoes" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('/dashboard/colecoes') || isActive('/dashboard/colecoes/novo') ? 'bg-box  rounded-md' : ''} hover:bg-box p-2 rounded-md`}>
                <FiCornerDownRight className="text-xl" />
                Coleções
              </Link>
              <Link href="/dashboard/minha-loja" className={`flex items-center gap-2 p-2 ${isActive('/dashboard/minha-loja') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiShoppingBag className="text-xl" />
                Minha Loja
              </Link>
              <Link href="/dashboard/minha-loja/editar" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive("/dashboard/minha-loja/editar") ? 'bg-box  rounded-md' : ''} hover:bg-box p-2 rounded-md`}>
                <FiCornerDownRight className="text-xl" />
                Editar Loja
              </Link>
              <Link href="/dashboard/minha-loja/modelos" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('/dashboard/minha-loja/modelos') ? 'bg-box  rounded-md' : ''} hover:bg-box p-2 rounded-md`}>
                <FiCornerDownRight className="text-xl" />
                Modelos
              </Link>
              <Link href="/dashboard/plano" className={`flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiDollarSign className="text-xl" />
                Meu Plano
              </Link>
            </div>
            <div>
              <Link href="/dashboard/configuracoes" className={`flex items-center gap-2 p-2 ${isActive('#') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiSettings className="text-xl" />
                Configurações
              </Link>
            </div>
          </aside>
      }
    </div>

  );
};

export default Sidebar;