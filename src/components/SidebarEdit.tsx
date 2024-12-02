'use client';

import { usePage } from "@/contexts/PageContext";

import { templates } from "@/data/templates";
import { useSection } from "@/contexts/SectionContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const selectedTemplate = templates.template1;

const SidebarEdit = () => {
  const { selectedSection, setSelectedSection, sections, setSections } = useSection();
  const { currentPage, setCurrentPage } = usePage();

  const handleClickSection = (key: string) => {
    setSelectedSection(key);
  };
  const handleClickPage = (page: string) => {
    setCurrentPage(page);
  }

  const toggleVisible = (sectionVisible: string) => {
    const newSections = sections.map((section) => {
      if (section.key === sectionVisible) {
        return {
          ...section,
          visible: !section.visible,
        };
      }
      return section;
    });
    setSections(newSections);
  }

  return (
    <aside className="font-logo h-[calc(100%-4rem)] text-lg fixed left-0 w-64 bg-white flex flex-col rounded-tl-3xl p-5 gap-4">
      <div className="flex flex-col ">
        <h1 className="text-xl mb-1">Páginas</h1>
        {
          Object.entries(selectedTemplate.pages).map(([key, value]) => (
            <h2 key={key} className={"text-base hover:bg-primary py-2 px-3 rounded-lg" + (key == currentPage ? " bg-primary" : "")} onClick={() => handleClickPage(key)}>
              {value.title}
            </h2>
          ))
        }
      </div>
      <div>
        <h1 className="text-xl mb-1">Modelo</h1>
        <div className="flex flex-col">
          <h2 className={"text-base hover:bg-primary py-2 px-3 rounded-lg" + (selectedSection == 'geral' ? " bg-primary" : "")} onClick={() => handleClickSection('geral')}>
            Geral
          </h2>
          {sections.map((section) => (
            <div
              key={section.key}
              className={"text-base hover:bg-primary py-2 px-3 rounded-lg flex justify-between items-center" + (selectedSection == section.key ? " bg-primary" : "")}
              onClick={() => handleClickSection(section.key)}>
              <h2>
                {section.title}
              </h2>
              <div className="flex gap-2 text-lg text-gray-400">
                <div onClick={() => toggleVisible(section.key)}>
                  {section.visible ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarEdit;
