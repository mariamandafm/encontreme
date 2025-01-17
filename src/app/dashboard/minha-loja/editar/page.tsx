"use client";

import { useSection } from "@/contexts/SectionContext";
import SidebarEdit from "@/components/SidebarEdit";
import React, { useEffect, useState } from "react";
import FormGeral from "@/components/forms/FormGeral";
import FormBanner from "@/components/forms/FormBanner";
import FormApresentacao from "@/components/forms/FormApresentacao";
import FormProdutos from "@/components/forms/FormProdutos";
import FormRodape from "@/components/forms/FormRodape";
import BasicTemplate from "@/components/basic-template/BasicTemplate";
import TopbarEdit from "@/components/TopbarEdit";

const EditarLoja = () => {
  const { selectedSection } = useSection();
  const [pageData, setPageData] = useState();
  const [formData, setFormData] = useState<any>({});

  const fetchPage = async () => {
    const response = await fetch(`/api/page/10`);
    const data = await response.json();
    setPageData(data);
  };

  useEffect(() => {
    fetchPage();
  }, []);

  const sectionForms: {
    [key: string]: React.ComponentType<{
      data: any;
      onChange: (values: any) => void;
    }>;
  } = {
    geral: FormGeral,
    banner: FormBanner,
    apresentacao: FormApresentacao,
    produtos: FormProdutos,
    rodape: FormRodape,
  };

  const handleFormChange = (section: string, values: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [section]: values,
    }));
  };

  const SelectedForm = sectionForms[selectedSection];

  return (
    <div className="grid grid-cols-4">
      <TopbarEdit data={formData} />
      <SidebarEdit />
      <div className="col-span-3 ">
        <h1>
          <BasicTemplate />
        </h1>
      </div>

      <aside className="text-lg bg-white flex flex-col rounded-tr-3xl p-5 h-full">
        {SelectedForm ? (
          <SelectedForm
            data={pageData?.[selectedSection]} // Passa os dados para o formulário
            onChange={(values: any) =>
              handleFormChange(selectedSection, values)
            } // Captura as alterações do formulário
          />
        ) : (
          <p>Seção não encontrada</p>
        )}
      </aside>
    </div>
  );
};

export default EditarLoja;
