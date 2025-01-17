import React, { useState, useEffect } from 'react'
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

const FormApresentacao = ({ data, onChange }: { data: any; onChange: (values: any) => void }) => {
  const [formValues, setFormValues] = useState({
    presentationImage: '',
    presentationDescription: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      
      setFormValues((prevValues) => {
        const updatedValues = { ...prevValues, [name]: value };
        onChange(updatedValues);
        return updatedValues;
      });
    };
    
    useEffect(() => {
      setFormValues(data || {});
  }, [data]);
  const presentationText = "Loja de Cerâmica Artesanal que combina tradição e design contemporâneo, oferecendo peças únicas feitas à mão com atenção aos detalhes e valorização da cultura local. Produtos exclusivos para decoração e uso cotidiano, com acabamento de alta qualidade."

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1 className='text-xl'>Imagem de Apresentação</h1>
        <span className="text-sm">Tamanho recomendado: 300x1000</span>
        <div className="relative bg-box flex content-center justify-center  h-32 mb-3">
          <img src="/presentation.jpg" />
        </div>
        <div className='flex justify-start gap-3 text-base '>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl'><FiUploadCloud />Alterar</button>
          <button className='flex items-center gap-2 bg-box px-3 py-1 rounded-3xl text-red-800'><FiTrash2 />Remover</button>
        </div>
      </div>
      <hr />
      <div>
        <h1 className='text-xl'>Configurações</h1>
        <textarea
          rows={5}
          className="mt-2 w-full bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue resize-none"
          placeholder="Digite sua descrição aqui..."
          name="presentationDescription"
          value={formValues.presentationDescription}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
    </div>
  )
}

export default FormApresentacao