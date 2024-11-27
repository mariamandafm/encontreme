import React from 'react'
import Input from '../FormInput'

const FormRodape = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-xl'>Coleção</h1>
      <div>
        <Input placeholder="Link Facebook" defaultValue="https://www.facebook.com/">Link Facebook</Input>
      </div>
      <div>
        <Input placeholder="Link Instagram" defaultValue="https://www.instagram.com/">Link Instagram</Input>
      </div>
      <div>
        <Input placeholder="Link Youtube" defaultValue="https://www.youtube.com/">Link Youtube</Input>
      </div>
      <div>
        <label className="font-medium">Endereço</label>
        <textarea
            rows={5}
            className="mt-2 w-full bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue resize-none"
            placeholder="Digite sua endereço aqui..."
            defaultValue=""
          ></textarea>
      </div>
      <div>
        <label className="font-medium">Contato</label>
        <textarea
          rows={5}
          className="mt-2 w-full bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue resize-none"
          placeholder="Digite seu contato aqui..."
          defaultValue=""
        ></textarea>
      </div>

      <hr/>
  </div>
  )
}

export default FormRodape