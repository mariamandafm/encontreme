'use client';

import React, { createContext, useContext, useState } from "react";
import { Section, templates } from "../data/templates";

type SectionContextType = {
    selectedSection: string;
    setSelectedSection: (section: string) => void;
    sections: Section[];
    setSections: (sections: Section[]) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [selectedSection, setSelectedSection] = useState<string>("geral");
    //const sections = Object.entries(templates.template1.pages[0].sections);
    const templateSections = templates.template1.pages["page1"].sections; 
    const [sections, setSections] = useState<Section[]>([...templateSections]);

    return (
        <SectionContext.Provider value={{ selectedSection, setSelectedSection, sections, setSections }}>
            {children}
        </SectionContext.Provider>
    );
};

export const useSection = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error("useSection must be used within a SectionProvider");
    }
    return context;
};
