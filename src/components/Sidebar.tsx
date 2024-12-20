/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSidebar } from "../contexts/SideBarContext";


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
  const isActiveSubstring = (path: string) => pathname.includes(path);

  const { sideBar, setSideBarValue } = useSidebar();


  useEffect(() => {
    if (sideBar) {
      setSideBarValue(!sideBar);
    }
  }, [pathname]);


  return (
    <div>
      {
        pathname == "/dashboard/minha-loja/editar"
          ? null
          :
          <aside className={`font-logo h-[calc(100%-4rem)] text-lg fixed left-0 w-64 bg-white flex-col rounded-tl-3xl p-5 justify-between z-10 flex ${sideBar ? "translate-x-0" : "-translate-x-full"} -translate-x-full md:translate-x-0 transition-transform ease-in-out`}>
            <div className="flex flex-col gap-1">
              <Link href="/dashboard" className={`flex items-center gap-2 p-2 ${isActive('/dashboard') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiHome className="text-xl" />
                Página Inicial
              </Link>
              <Link href="/dashboard/produtos" className={`flex items-center gap-2 p-2 ${isActive('/dashboard/produtos') || isActive('/dashboard/produtos/novo') || isActiveSubstring('/dashboard/produtos/editar') ? 'bg-primary  rounded-md' : ''} hover:bg-primary p-2 rounded-md`}>
                <FiShoppingCart className="text-xl" />
                Produtos
              </Link>
              <Link href="/dashboard/colecoes" className={`text-gray-500 flex items-center gap-2 p-2 ${isActive('/dashboard/colecoes') || isActive('/dashboard/colecoes/novo') || isActiveSubstring('/dashboard/colecoes/editar') ? 'bg-box  rounded-md' : ''} hover:bg-box p-2 rounded-md`}>
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