import React from 'react'
import Select from '../SelectInput'
import Input from '../FormInput'

const FormProdutos = () => {
  return (
    <div className='flex flex-col gap-5'>
    <div>
      <h1 className='text-xl'>Coleção</h1>
      <Select title="Coleção do Catálogo">
        <option value="colecao1">Todos os Produtos</option>
        <option value="colecao2">Coleção de Inverno</option>
        <option value="colecao3">Xícaras de Natal</option>
      </Select>
    </div>
    <hr/>
    <div>
      <h1 className='text-xl'>Configurações</h1>
      <Input placeholder="Titulo da página" defaultValue="Produtos">Título</Input>
    </div>
    <hr/>
  </div>
  )
}

export default FormProdutos