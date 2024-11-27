import React from 'react'
import Image from 'next/image'
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

const FormGeral = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1 className='text-xl'>Logo</h1>
        <span className="text-sm">Altura recomendada: 506px</span>
        <div className="bg-box flex content-center justify-center rounded-lg h-32 mb-3">
          <Image 
            src="https://www.svgrepo.com/show/98047/vase.svg"
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        <div className='flex justify-start gap-3 text-base '>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl'><FiUploadCloud />Alterar</button>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl text-red-800'><FiTrash2 />Remover</button>
        </div>
      </div>
      <hr/>
      <div>
        <h1 className='text-xl'>Icon</h1>
        <span className="text-sm">Tamanho recomendado: 108x108px</span>
        <div className="bg-box flex justify-center w-[50px] h-[50px] h-content-center rounded-lg mb-3">
          <Image 
              src="https://www.svgrepo.com/show/98047/vase.svg"
              alt="Logo"
              width={27}
              height={27}
            />
        </div>
        <div className='flex  justify-start gap-3 text-base '>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl'><FiUploadCloud />Alterar</button>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl text-red-800'><FiTrash2 />Remover</button>
        </div>
      </div>
      <hr/>
      <div>
        <h1 className='text-xl'>Cor</h1>
        <span className="text-sm">Principal</span>
        <div className="bg-box h-10 rounded-lg mb-3 flex items-center gap-2 px-2">
          <div className='h-6 w-6 rounded-lg bg-orange-600'></div>
          <span className='text-sm'>#EA580C</span>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default FormGeral