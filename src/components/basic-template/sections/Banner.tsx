import React from 'react'

interface BannerProps {
  data: {
    bannerTitle: string;
  };
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  if (!data) {
    return <div>Data is undefined</div>;
  }
  return (
    <div className="font-sans relative h-96 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://seculoverdepaisagismo.com.br/wp-content/uploads/2022/04/10-Ceramica-de-barro-artesanal-com-detalhes-unicos-produzidos-por-um-atelier-familiar-em-Minas-Gerais..jpeg" alt="Background Image" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{data.bannerTitle}</h1>
      </div>
    </div>
  )
}

export default Banner