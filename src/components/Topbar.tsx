"use client";

import React from 'react';
import "../styles/globals.css";

import { FiMenu, FiUser } from "react-icons/fi";

import { usePathname } from 'next/navigation';
import TopbarEdit from './TopbarEdit';
import { useSidebar } from '../contexts/SideBarContext';

const Topbar = () => {
    const pathname = usePathname();
    const { setSideBarValue, sideBar } = useSidebar();

    return (
        <div>
            {
                pathname == "/dashboard/minha-loja/editar"
                    ? null
                    :
                    <nav className="fixed top-0 left-0 w-full h-16 text-white bg-black z-10 flex items-center px-4 justify-between">
                        <button className='md:hidden' onClick={() => setSideBarValue(!sideBar)}>
                            <FiMenu size={28} />
                        </button>
                        <div>
                            <span className="text-2xl">EncontreMe</span>
                            <span className="text-primaryBlue text-xs">✦</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg hidden md:flex">Username</span>
                            <div className="rounded-full bg-white p-2">
                                <FiUser className='h-7 w-7 text-black' />
                            </div>
                        </div>
                    </nav>
            }
        </div>


    );
};

export default Topbar;