import React from 'react'
import { CeramicProduct } from './Products'
import Image from 'next/image'

const ProductCard:React.FC<CeramicProduct> = ({ name, price, description, imageURL }) => {
  return (
    <div className="border flex flex-col justify-between rounded-lg p-4 bg-white h-72 hover:shadow-lg">
        <div className='relative h-[70%]'>
            <Image 
                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                alt="Presentation"
                fill={true}
                style={{ objectFit: 'cover' }}
            />
        </div>
        <h2 className="text-base">{name}</h2>
        <p className="text-lg font-bold">R$ {price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard