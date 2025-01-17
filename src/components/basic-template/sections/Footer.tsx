import Link from 'next/link';
import React from 'react'
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

interface FooterProps {
  data: {
    facebookLink: string;
    instagramLink: string;
    youtubeLink: string;
    address: string;
    contact: string;
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data) {
    return <div>Data is undefined</div>;
  }
  return (
    <footer id="rodape" className="bg-white flex justify-center py-6 font-sans">
      <div className="w-11/12 grid grid-cols-1 gap-2 md:grid-cols-4 ">
        <div className="flex text-4xl gap-3">
          <Link href={data.facebookLink}><FiFacebook /></Link>
          <Link href={data.instagramLink}><FiInstagram /></Link>
          <Link href={data.youtubeLink}><FiYoutube /></Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold'>Endereço</h2>
          <span>{data.address}</span>
        </div>
        <div className='flex flex-col md:col-span-2'>
          <h2 className='font-bold'>Contato</h2>
          <span>{data.contact}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer