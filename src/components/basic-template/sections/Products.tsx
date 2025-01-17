import React from 'react'
import ProductCard from './ProductCard';
import { ceramicProducts } from '@/data/products';

interface ProductsProps {
  data: {
    productsTitle: string;
  };
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  if (!data) {
    return <div>Data is undefined</div>;
  }
  return (
    <div id="produtos" className="flex flex-col items-center mt-6 mb-12 font-sans">
      <div className="w-11/12">
        <h1 className="text-2xl text-center">{data.productsTitle}</h1>
        <div className='grid md:grid-cols-4 mt-6 gap-5'>
          {ceramicProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageURL={product.imageURL}
            />
          ))}
        </div>
      </div>
      <nav className="mt-10" >
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-600 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-200 hover:text-gray-800"
            >
              Anterior
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-white bg-orange-600 border border-orange-600 rounded-md hover:bg-orange-700 hover:border-orange-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-200 hover:text-gray-800"
            >
              Próximo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Products