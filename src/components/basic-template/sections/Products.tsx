import React from 'react'
import ProductCard from './ProductCard';

export type CeramicProduct = {
  name: string;
  price: number; // Price in the desired currency, e.g., USD or BRL
  description: string;
  imageURL: string;
};

const ceramicProducts: CeramicProduct[] = [
  {
    name: "Vaso Rústico Terracota",
    price: 120.0,
    description: "Vaso artesanal em terracota, ideal para ambientes rústicos e jardins internos.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Vaso Minimalista Branco",
    price: 85.5,
    description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Centro de Mesa Esmaltado",
    price: 200.0,
    description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Vaso Geométrico Cinza",
    price: 95.0,
    description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Conjunto de Vasos Coloridos",
    price: 180.0,
    description: "Conjunto com três vasos de tamanhos diferentes, decorados à mão em cores vibrantes.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Vaso Boho em Cerâmica Natural",
    price: 75.0,
    description: "Vaso com padrão boho em cerâmica natural, perfeito para criar um ambiente aconchegante.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Vaso de Parede com Alça",
    price: 110.0,
    description: "Vaso suspenso com alça de couro, ideal para decorar paredes com plantas pendentes.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    name: "Vaso Pequeno com Detalhes Dourados",
    price: 50.0,
    description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
    imageURL: "www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
];

const Products = () => {
  return (
    <div id="produtos" className="flex flex-col items-center mt-6 mb-12 font-sans">
      <div className="w-11/12">
        <h1 className="text-2xl text-center">Produtos</h1>
        <div className='grid md:grid-cols-4 mt-6 gap-5'>
          {ceramicProducts.map((product, index) => (
            <ProductCard
              key={index}
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
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-800"
            >
              2
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