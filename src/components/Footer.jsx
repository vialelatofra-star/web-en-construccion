import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tight text-white mb-1">Indusales</span>
            <span className="text-sm text-gray-400">Colombia S.A.S.</span>
            <p className="mt-4 text-gray-400 text-sm max-w-md text-center md:text-left">
              Líderes en suplementación estratégica y técnica para la ganadería colombiana.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Contacto Comercial</span>
            <a href="mailto:comercial@indusales.com.co" className="text-[#52B056] hover:text-white transition-colors">
              comercial@indusales.com.co
            </a>
            <span className="text-gray-400 text-sm mt-1">Bogotá, Colombia</span>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Indusales Colombia S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <span>Desarrollado por</span>
            <span className="font-bold text-white tracking-widest">BAVS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
