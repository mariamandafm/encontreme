'use client';

import React, { createContext, useContext, useState } from "react";

type SectionContextType = {
    sideBar: boolean,
    setSideBarValue: (value: boolean) => void
};

const SideBarContext = createContext<SectionContextType | undefined>(undefined);

export const SideBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sideBar, setSideBar] = useState(false)

    function setSideBarValue(value: boolean) {
        setSideBar(value);
    }

    return (
        <SideBarContext.Provider value={{ sideBar, setSideBarValue }}>
            {children}
        </SideBarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error("useSection must be used within a SectionProvider");
    }
    return context;
};
