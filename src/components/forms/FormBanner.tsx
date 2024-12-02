import React from 'react'
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import Input from '../FormInput';

const FormBanner = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1 className='text-xl'>Banner Computador</h1>
        <span className="text-sm">Tamanho recomendado: 300x1000</span>
        <div className="relative bg-box flex content-center justify-center  h-32 mb-3">
          <img src="https://seculoverdepaisagismo.com.br/wp-content/uploads/2022/04/10-Ceramica-de-barro-artesanal-com-detalhes-unicos-produzidos-por-um-atelier-familiar-em-Minas-Gerais..jpeg" alt="Background Image" className="rounded-lg object-cover object-center w-full h-full" />
        </div>
        <div className='flex justify-start gap-3 text-base '>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl'><FiUploadCloud />Alterar</button>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl text-red-800'><FiTrash2 />Remover</button>
        </div>
      </div>
      <hr />
      <div>
        <h1 className='text-xl'>Banner Celular</h1>
        <span className="text-sm">Tamanho recomendado: 300x400</span>
        <div className="bg-box flex justify-center w-[120px] h-[120px] h-content-center mb-3">
          <img src="https://seculoverdepaisagismo.com.br/wp-content/uploads/2022/04/10-Ceramica-de-barro-artesanal-com-detalhes-unicos-produzidos-por-um-atelier-familiar-em-Minas-Gerais..jpeg" alt="Background Image" className="rounded-lg object-cover object-center w-full h-full" />
        </div>
        <div className='flex justify-start gap-3 text-base '>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl'><FiUploadCloud />Alterar</button>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl text-red-800'><FiTrash2 />Remover</button>
        </div>
      </div>
      <hr />
      <div>
        <h1 className='text-xl mb-1'>Configurações</h1>
        <Input type="text" defaultValue="Cerâmica Artesanal"><span className="text-base">Título do Banner</span></Input>
        <Input type="text" defaultValue="60%"><span className="text-base">Opacidade</span></Input>
      </div>
      <hr />
    </div>
  )
}

export default FormBanner