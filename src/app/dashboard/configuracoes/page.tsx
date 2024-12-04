"use client";

import React, { useRef, useState } from 'react';
import { FiCopy, FiCheck, FiEye } from "react-icons/fi";
import Input from '../../../components/FormInput';
import { useRouter } from 'next/navigation';

const MinhaLoja = () => {
    const linkRef = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState(false);
    const router = useRouter(); // Inicializando o router corretamente

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
    };

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
                                <span className="text-gray-00 select-none">
                                    <span className='hidden md:inline'>https://</span>encontreme.com/
                                </span>
                                <input
                                    type="text"
                                    ref={linkRef}
                                    defaultValue="minhaloja"
                                    className="bg-transparent focus:ring-0 focus:outline-none"
                                />
                                <div
                                    onClick={handleLinkCopy}
                                    className="absolute inset-y-0 right-3 flex items-center pointer-events-auto hover:text-secondaryBlue"
                                >
                                    {copied ? <FiCheck className="text-2xl text-green-700" /> : <FiCopy className="text-2xl" />}
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

                        <h2 className="text-2xl font-medium mt-8 mb-8 md:mb-0">Dados de Faturamento</h2>

                        <div className="mt-4">
                            <Input placeholder="Ex.: 000.000.000-00" type="text">CPF</Input>
                        </div>

                        <div className="mt-4">
                            <Input placeholder="Ex.: 12345-678" type="text">CEP</Input>
                        </div>

                        <div className="mt-4">
                            <Input placeholder="Ex.: Rua das Flores, 123" type="text">Endereço</Input>
                        </div>

                        <div className="mt-4">
                            <Input placeholder="Ex.: Apartamento 45, Bloco B" type="text">Complemento</Input>
                        </div>

                        <div className="mt-4">
                            <label className="font-medium">Cidade</label>
                            <select className="w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue">
                                <option value="" disabled selected>Selecione sua cidade</option>
                                <option value="sao-paulo">São Paulo</option>
                                <option value="rio-de-janeiro">Rio Grande do Norte</option>
                                <option value="salvador">Salvador</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="font-medium">Estado</label>
                            <select className="w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue">
                                <option value="" disabled selected>Selecione seu estado</option>
                                <option value="sp">São Paulo</option>
                                <option value="rj">Rio de Janeiro</option>
                                <option value="ba">Bahia</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="font-medium">País</label>
                            <select className="w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue">
                                <option value="" disabled selected>Selecione seu país</option>
                                <option value="brasil">Brasil</option>
                                <option value="argentina">Argentina</option>
                                <option value="eua">Estados Unidos</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 bg-white rounded-3xl p-7">
                    <h2 className="text-2xl font-medium mb-8 md:mb-0">Plano</h2>
                    <div className="mt-4">
                        <button
                            onClick={() => router.push("/dashboard/plano")}
                            className='hover:bg-gray-100 mt-2 w-full bg-box rounded-lg flex justify-between p-3'
                        >
                            <p>Gratuito</p>
                            <div className='flex items-center'>
                                <p className='text-stroke mr-2'>VER PLANOS</p>
                                <FiEye stroke='#C4C4C4' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinhaLoja;