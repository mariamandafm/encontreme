import React, { useState, useEffect } from 'react'
import Navbar from './sections/Navbar'
import Banner from './sections/Banner'
import Presentation from './sections/Presentation'
import Products from './sections/Products'
import Footer from './sections/Footer'

import { useSection } from '@/contexts/SectionContext';

interface SectionProps {
  data: any;
}

const availableSections: { [key: string]: React.ComponentType<SectionProps> } = {
  'banner': Banner,
  'apresentacao': Presentation,
  'produtos': Products,
  'rodape': Footer,
}

const BasicTemplate = () => {
  const { sections } = useSection();
  const [pageData, setPageData] = useState();

  const fetchPage = async () => {
    const response = await fetch(`/api/page/10`);
    const data = await response.json();
    setPageData(data);
  } 

  useEffect(() => {
        fetchPage();
  },[])  


  return (
    <div>
      <Navbar />
      {sections.filter(section => section.visible).map((section) => {
        const Section = availableSections[section.key];
        return <Section key={section.key} data={pageData?.[section.key]} />
      })}
    </div>
  )
}

export default BasicTemplate