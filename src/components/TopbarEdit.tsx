'use client';

import React from 'react';
import "../styles/globals.css";
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from "react-icons/fi";

const TopbarEdit = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-16 text-white bg-black z-10 flex items-center px-4 justify-between">
            <div>
                <button onClick={handleBack} className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box"><FiArrowLeft />Voltar</button>
            </div>
            <div className="flex gap-2">
            <button className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box">Ver</button>
            <button className="text-black bg-white px-5 py-1 flex items-center rounded-3xl gap-1 hover:bg-box">Salvar</button>
            </div>
        </nav>
    );
};

export default TopbarEdit;