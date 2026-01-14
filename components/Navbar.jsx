import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const navItems = [
    { name: 'About Us', id: 'about' },
    { 
      name: 'Divisions', 
      id: 'products',
      subItems: ['CardioPlus', 'HypertensionX', 'DiabeticManagement', 'GynoHealth','UroCare','OTCwellness',  'NerveSpeciality',  'BabyHood', 'Renexa']
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleScroll = (id) => {
    if (id === 'products') {
      // If clicking Divisions, scroll and default to CardioPlus
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      // Short timeout to allow for smooth scroll
      setTimeout(() => {
        const cardioButton = document.querySelector(`button[data-section="CardioPlus"]`);
        if (cardioButton) {
          cardioButton.click();
        }
      }, 200);
    } else if (id === 'contact') {
      // Scroll to footer
      document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  const handleProductScroll = (activeSection) => {
    // Scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    
    // Short timeout to allow for smooth scroll
    setTimeout(() => {
      const sectionButton = document.querySelector(`button[data-section="${activeSection}"]`);
      if (sectionButton) {
        sectionButton.click();
      }
    }, 200);
    
    setIsOpen(false);
    setShowProducts(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="#hero" scroll={false}>
            <img src="/logo.jpeg" alt="Logo" className="mt-1 h-10 cursor-pointer" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center ">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.subItems && setShowProducts(true)}
                onMouseLeave={() => item.subItems && setShowProducts(false)}
              >
                <button 
                  onClick={() => !item.subItems && handleScroll(item.id)}
                  className="text-blue-900 hover:text-blue-700 transition-colors py-4 px-4 "
                >
                  {item.name}
                </button>
                
                {item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={showProducts ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    className={`absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 min-w-[200px] ${
                      showProducts ? 'block' : 'hidden'
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <div 
                        key={subItem} 
                        onClick={() => handleProductScroll(subItem)}
                        className="p-2 hover:bg-blue-50 rounded cursor-pointer transition-colors"
                      >
                        {subItem}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-blue-900 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-900 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-900"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden bg-white pb-4">
            {navItems.map((item) => (
              <div key={item.name} className="px-4 py-2 border-t">
                <button
                  onClick={() => !item.subItems ? handleScroll(item.id) : null}
                  className="text-blue-900"
                >
                  {item.name}
                </button>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <div 
                        key={subItem} 
                        onClick={() => handleProductScroll(subItem)}
                        className="p-2 hover:bg-blue-50 rounded cursor-pointer"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}