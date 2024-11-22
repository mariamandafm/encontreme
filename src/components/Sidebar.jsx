import React from 'react';

const Sidebar = () => {
    return (
        <aside className="fixed top-16 left-0 h-screen w-64 flex flex-col bg-white rounded-t-3xl p-4">
            <a>Página Inicial</a>
            <a>Produtos</a>
            <a>Coleções</a>
            <a>Minha Loja</a>
            <a>Editar Loja</a>
            <a>Modelos</a>
            <a>Meu Plano</a>
        </aside>
    );
};

export default Sidebar;