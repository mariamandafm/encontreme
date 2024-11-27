import Link from 'next/link';
import React from 'react'
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="rodape" className="bg-white flex justify-center py-6 font-sans">
      <div className="w-11/12 grid grid-cols-1 gap-2 md:grid-cols-4 ">
        <div className="flex text-4xl gap-3">
          <Link href="#"><FiFacebook /></Link>
          <Link href="#"><FiInstagram /></Link>
          <Link href="#"><FiYoutube /></Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold'>Endereço</h2>
          <span>Rua das Flores, 123</span>
          <span>Bairro Lagoa Nova</span>
          <span>Natal, RN</span>
          <span>CEP: 59056-789</span>
        </div>
        <div className='flex flex-col md:col-span-2'>
          <h2 className='font-bold'>Contato</h2>
          <span>contato@ceramicaartesanal.com.br</span>
          <span>(84) 99876-5432</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer