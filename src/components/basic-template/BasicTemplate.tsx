import React from 'react'
import Navbar from './sections/Navbar'
import Banner from './sections/Banner'
import Presentation from './sections/Presentation'
import Products from './sections/Products'
import Footer from './sections/Footer'

import { useSection } from '@/contexts/SectionContext';

const availableSections: { [key: string]: React.ComponentType } = {
  'banner': Banner,
  'apresentacao': Presentation,
  'produtos': Products,
  'rodape': Footer,
}

const BasicTemplate = () => {
  const { sections } = useSection();

  return (
    <div>
      <Navbar />
      {sections.filter(section => section.visible).map((section) => {
        const Section = availableSections[section.key];
        return <Section key={section.key} />
      })}
    </div>
  )
}

export default BasicTemplate