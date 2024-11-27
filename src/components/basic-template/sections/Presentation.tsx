import Image from 'next/image'
import React from 'react'

const Presentation = () => {
  return (
    <div className="bg-white h-96 flex justify-center py-5">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative h-32 md:h-[80%]">
          <Image 
            src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            alt="Presentation"
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
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