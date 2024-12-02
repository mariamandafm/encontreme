import Image from 'next/image'
import React from 'react'

const Presentation = () => {
  return (
    <div className="bg-white flex justify-center items-center py-5">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Image 
            src="/presentation.jpg"
            alt="Presentation"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
        <div className="flex font-sans text-gray-700">
          <p>
            Loja de Cerâmica Artesanal que combina tradição e design contemporâneo, oferecendo peças únicas feitas à mão com atenção aos detalhes e valorização da cultura local. Produtos exclusivos para decoração e uso cotidiano, com acabamento de alta qualidade.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Presentation