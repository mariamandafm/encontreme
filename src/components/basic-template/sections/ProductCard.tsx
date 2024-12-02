import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductCard = ({ id, name, price, description, imageURL }: { id: number, name: string, description: string, price: number, imageURL: string }) => {
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