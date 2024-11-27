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
        <div className="p-12">
            <div className="flex justify-between pb-3">
                <h1 className="text-2xl font-medium">Minha Loja</h1>
                <div className='flex flex-row gap-4'>
                    <Link href="/minhaloja"  className="bg-white px-4 py-1 rounded-3xl hover:text-secondaryBlue">Ver</Link>
                    <button className="bg-white px-4 py-1 rounded-3xl hover:text-secondaryBlue">Salvar Alterações</button>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10 items-start">
                <div className="col-span-3 flex flex-col gap-10">
                    <div className="bg-white rounded-3xl p-7">
                        <div className='relative w-full h-[200px] overflow-hidden rounded-md'>
                            <Image
                                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                                alt="Preview do modelo"
                                fill={true}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='flex flex-row gap-4 justify-end pt-3'>
                            <button className="bg-gray-100 px-4 py-1 rounded-3xl hover:text-secondaryBlue">Alterar Modelo</button>
                            <button className="bg-gray-100 px-4 py-1 rounded-3xl hover:text-secondaryBlue">Personalizar</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-7">
                        <Input type="text" defaultValue="Minha Loja">Nome da Loja</Input>
                        <div className="mt-4">
                            <label className="font-medium">Link de Acesso</label>
                            <div className="relative flex items-center mt-2 w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue">
                                <span className="text-gray-00 select-none">https://encontreme.com/</span>
                                <input type="text" ref={linkRef} defaultValue="minhaloja" className="bg-transparent focus:ring-0 focus:outline-none" />
                                <div
                                    onClick={handleLinkCopy}
                                    className="absolute inset-y-0 right-3 flex items-center pointer-events-auto hover:text-secondaryBlue"
                                >
                                    {copied ? <FiCheck className="text-2xl  text-green-700" /> : <FiCopy className="text-2xl" />}
                                </div>

                            </div>
                        </div>

                        <div className="mt-4">
                            <Input placeholder="+55 (11) 12345-6789" defaultValue="+55 (84) 99999-9999" type="text">WhatsApp</Input>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-white rounded-3xl p-7">
                    <Select title="Publicação">
                        <option>Publicado</option>
                        <option>Rascunho</option>
                    </Select>

                    <div className="mt-4">
                        <Select title="Tipo de Loja">
                            <option>Venda de Produtos</option>
                            <option>Prestação de Serviços</option>
                            <option>Outro</option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinhaLoja;