'use client';

import React, { createContext, useContext, useState } from "react";
import { templates } from "../data/templates";

type PageContextType = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>("page1");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  return context;
};
