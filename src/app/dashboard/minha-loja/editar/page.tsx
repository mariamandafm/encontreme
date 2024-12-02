"use client";

import { useSection } from '@/contexts/SectionContext';
import SidebarEdit from '@/components/SidebarEdit';
import React from 'react';
import FormGeral from '@/components/forms/FormGeral';
import FormBanner from '@/components/forms/FormBanner';
import FormApresentacao from '@/components/forms/FormApresentacao';
import FormProdutos from '@/components/forms/FormProdutos';
import FormRodape from '@/components/forms/FormRodape';
import BasicTemplate from '@/components/basic-template/BasicTemplate';

const EditarLoja = () => {
    const { selectedSection } = useSection();

    const sectionForms: { [key: string]: React.ComponentType } = {
        'geral': FormGeral,
        'banner': FormBanner,
        'apresentacao': FormApresentacao,
        'produtos': FormProdutos,
        'rodape': FormRodape
    }

    return (
        <div className='grid grid-cols-4'>
            <SidebarEdit />
            <div className='col-span-3 '>
                <h1><BasicTemplate /></h1>
            </div>

            <aside className="text-lg bg-white flex flex-col rounded-tr-3xl p-5 h-full">
                {selectedSection ? (
                    <div>
                        {sectionForms[selectedSection] ? React.createElement(sectionForms[selectedSection]) : <p>Seção não encontrada</p>}
                    </div>
                ) : (
                    <p>Selecione uma seção para editar</p>
                )}
            </aside>
        </div>
    );
};

export default EditarLoja;