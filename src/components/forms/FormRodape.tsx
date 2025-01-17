import React, { useState, useEffect } from 'react'
import Input from '../FormInput'

const FormRodape = ({ data, onChange }: { data: any; onChange: (values: any) => void }) => {
    const [formValues, setFormValues] = useState({
      facebookLink: '',
      instagramLink: '',
      youtubeLink: '',
      address: '',
      contact: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
  
      setFormValues((prevValues) => {
        const updatedValues = { ...prevValues, [name]: value };
        onChange(updatedValues);
        return updatedValues; 
      });
    };
    
    useEffect(() => {
      setFormValues(data || {});
    }, [data]);
  
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-xl'>Coleção</h1>
      <div>
        <Input 
          placeholder="Link Facebook" 
          name="facebookLink"
          value={formValues.facebookLink}
          onChange={handleChange}
          
        >Link Facebook</Input>
      </div>
      <div>
        <Input 
          placeholder="Link Instagram" 
          name="instagramLink"
          value={formValues.instagramLink}
          onChange={handleChange}
        >Link Instagram</Input>
      </div>
      <div>
        <Input 
          placeholder="Link Youtube" 
          name="youtubeLink"
          value={formValues.youtubeLink}
          onChange={handleChange}
        >Link Youtube</Input>
      </div>
      <div>
        <label className="font-medium">Endereço</label>
        <textarea
            rows={5}
            className="mt-2 w-full bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue resize-none"
            placeholder="Digite sua endereço aqui..."
            name="address"
            value={formValues.address}
            onChange={handleChange}
          ></textarea>
      </div>
      <div>
        <label className="font-medium">Contato</label>
        <textarea
          rows={5}
          className="mt-2 w-full bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue resize-none"
          placeholder="Digite seu contato aqui..."
          name="contact"
          value={formValues.contact}
          onChange={handleChange}
        ></textarea>
      </div>

      <hr/>
  </div>
  )
}

export default FormRodape