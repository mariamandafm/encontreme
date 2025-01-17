import React, { useState, useEffect } from "react";
import Select from "../SelectInput";
import Input from "../FormInput";

const FormProdutos = ({
  data,
  onChange,
}: {
  data: any;
  onChange: (values: any) => void;
}) => {
  const [formValues, setFormValues] = useState({
    idCollection: "",
    productsTitle: "",
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
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl">Coleção</h1>
        <Select title="Coleção do Catálogo">
          <option value="colecao1">Todos os Produtos</option>
          <option value="colecao2">Coleção de Inverno</option>
          <option value="colecao3">Xícaras de Natal</option>
        </Select>
      </div>
      <hr />
      <div>
        <h1 className="text-xl">Configurações</h1>
        <Input 
          placeholder="Titulo da página" 
          name="productsTitle"
          value={formValues.productsTitle}
          onChange={handleChange}
        >
          Título
        </Input>
      </div>
      <hr />
    </div>
  );
};

export default FormProdutos;
