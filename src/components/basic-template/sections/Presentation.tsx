import Image from 'next/image'
import React from 'react'

interface PresentationProps {
  data: {
    presentationDescription: string;
  };
}

const Presentation: React.FC<PresentationProps> = ({ data }) => {
  if (!data) {
    return <div>Data is undefined</div>;
  }
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
            {data.presentationDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Presentation