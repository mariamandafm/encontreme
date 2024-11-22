import React from 'react';
import "../styles/globals.css";

import { Syne } from 'next/font/google'
import { FiUser } from "react-icons/fi";


const syne = Syne({
    subsets: ['latin'],
    weights: ['200..800'],
    display: 'swap',
    variable: '--font-syne'
}
)

const Topbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 text-white z-20 flex items-center px-4 justify-between">
            <div>
            <span className={`${syne.className} text-2xl`}>EncontreMe</span>
            <span className="text-primaryBlue text-xs">✦</span>
            </div>
            <div className="flex items-center gap-3">
                <spam  className={`${syne.className} font-extralight text-lg`}>Username</spam>
                <div className="rounded-full bg-white p-2">
                    <FiUser className='h-7 w-7 text-black' />
                </div>
            </div>   
        </nav>
    );
};

export default Topbar;