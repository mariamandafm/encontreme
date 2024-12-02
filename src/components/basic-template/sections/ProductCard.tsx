import React from 'react'
import { CeramicProduct } from './Products'
import Image from 'next/image'
import Link from 'next/link';

const ProductCard:React.FC<CeramicProduct> = ({ id, name, price, description, imageURL }) => {
  // const id = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/minhaloja/produtos/${id}`}>
      <div className="border flex flex-col justify-between rounded-lg p-4 bg-white h-72 hover:shadow-lg">
          <div className='relative h-[70%]'>
              <Image 
                  src={imageURL}
                  alt="Presentation"
                  fill={true}
                  style={{ objectFit: 'cover' }}
              />
          </div>
          <h2 className="text-base">{name}</h2>
          <p className="text-lg font-bold">R$ {price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default ProductCard