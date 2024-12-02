"use client";

import React, { useRef, useState } from 'react';
import { FiCopy, FiCheck } from "react-icons/fi";
import Image from 'next/image'
import Input from '../../../components/FormInput';
import Select from '../../../components/SelectInput';
import Link from 'next/link';


const MinhaLoja = () => {
    const linkRef = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState(false);

    const handleLinkCopy = () => {
        if (linkRef.current) {
            const fullLink = `https://encontreme.com/${linkRef.current.value}`;
            navigator.clipboard.writeText(fullLink)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch((err) => console.error("Erro ao copiar: ", err));
        }
    }

    return (
        <div className="md:p-12 p-4">
            <div className="md:flex justify-between pb-3">
                <h1 className="text-2xl font-medium mb-2 md:mb-0">Configurações</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 items-start">
                <div className="md:col-span-3 flex flex-col gap-10">
                    
                    <div className="bg-white rounded-3xl p-7">
                        <h2 className="text-2xl font-medium mb-8 md:mb-0">Acesso</h2>
                        <div className="mt-4">
                            <Input type="text" defaultValue="Maria da Silva">Nome</Input>
                        </div>
                        <div className="mt-4">
                            <label className="font-medium">E-mail</label>
                            <div className="relative flex items-center mt-2 w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue">
                                <span className="text-gray-00 select-none"><span className='hidden md:inline'>https://</span>encontreme.com/</span>
                                <input type="text" ref={linkRef} defaultValue="minhaloja" className="bg-transparent focus:ring-0 focus:outline-none" />
                                <div
                                    onClick={handleLinkCopy}
                                    className="absolute inset-y-0 right-3 flex items-center pointer-events-auto hover:text-secondaryBlue"
                                >
                                    {copied ? <FiCheck className="text-2xl  text-green-700" /> : <FiCopy className="text-2xl" />}
                                </div>

                            </div>
                        </div>

                        <button className="bg-black px-6 py-1 rounded-3xl hover:bg-zinc-800 duration-75 transition-colors mt-6">
                            <p className="text-white">Alterar Dados</p>
                        </button>

                        <div className="mt-8">
                            <Input placeholder="Digite sua senha atual" type="text">Senha Atual</Input>
                        </div>

                        <div className="mt-4">
                            <Input placeholder="Digite uma nova senha" type="text">Nova Senha</Input>
                        </div>

                        <button className="bg-black px-6 py-1 rounded-3xl hover:bg-zinc-800 duration-75 transition-colors mt-6">
                            <p className="text-white">Alterar Senha</p>
                        </button>
                    </div>
                </div>
                <div className="md:col-span-2 bg-white rounded-3xl p-7">
                    <h2 className="text-2xl font-medium mb-8 md:mb-0">Plano</h2>

                    <div className="mt-4">
                            <Input placeholder="Estelar" type="text">Plano Atual</Input>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MinhaLoja;