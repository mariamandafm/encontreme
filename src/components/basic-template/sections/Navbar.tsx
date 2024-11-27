import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full text-lg flex items-center justify-center bg-white h-16 ">
      <div className="flex justify-between w-11/12">
        <div className="flex items-center gap-10">
          <Image 
            src="https://www.svgrepo.com/show/98047/vase.svg"
            alt="Logo"
            width={35}
            height={35}
          />
          <ul className="hidden gap-8 md:flex">
            <li><a href="#banner">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#rodape">Contato</a></li>
          </ul>
        </div>
        <Link href="#" className="rounded-full p-2 hover:bg-box text-2xl">
          <FiShoppingBag/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar