export type Section = {
  key: string;
  title: string;
  visible: boolean;
};

export type Sections = {
  [key: string]: string | Section;
};


type Template = {
  name: string;
  type: string;
  palette: Record<string, string>;
  pages: Record<string, { title: string; sections: Section[] }>;
};

type Templates = {
  [key: string]: Template;
};

export const templates: Templates = {
  template1: {
    name: "Sépia",
    type: "Catálogo de produtos",
    palette: {},
    pages: {
      page1: {
        title: "Home",
        sections: [
          { key: "banner", title: "Banner", visible: true },
          { key: "apresentacao", title: "Apresentação", visible: true },
          { key: "produtos", title: "Produtos", visible: true },
          { key: "rodape", title: "Rodapé", visible: true },
        ],
      },
    },
  },
};

