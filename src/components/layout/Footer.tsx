import React from 'react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full z-40 px-2 sm:px-6 py-2.5 sm:py-3 bg-[#e9ebe8]/95 backdrop-blur-md border-t border-[#d8dad7] select-none cursor-default">
      <div className="w-full flex justify-center cursor-default">
        
        {/* Contenedor flex con envoltura automática por si la pantalla es muy pequeña, pero que intenta mantenerse en un solo renglón (gap horizontal para separar los elementos) */}
        <div className="flex flex-wrap items-center justify-center text-center text-gray-600 font-sans text-[9px] sm:text-[10px] md:text-[11px] font-medium gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-1">
          
          {/* 1. Indusales */}
          <span className="uppercase font-bold text-gray-800 tracking-wider">
            Indusales Colombia S.A.S.
          </span>
          
          <span className="hidden sm:inline text-gray-400">|</span>
          
          {/* 2. Líderes */}
          <span className="tracking-wide">
            Líderes en suplementación estratégica y técnica para la ganadería colombiana
          </span>
          
          <span className="hidden md:inline text-gray-400">|</span>
          
          {/* 3. Derechos */}
          <span className="tracking-wide">
            Todos los derechos reservados
          </span>
          
          <span className="hidden sm:inline text-gray-400">|</span>
          
          {/* 4. Correo */}
          <a href="mailto:comercial@indusales.com.co" className="hover:text-[#3b9f44] transition-colors tracking-wide font-semibold text-gray-700">
            comercial@indusales.com.co
          </a>
          
          <span className="hidden lg:inline text-gray-400">|</span>
          
          {/* 5. Desarrollado por */}
          <span className="tracking-wide">
            Desarrollado por <span className="font-bold text-gray-800">BAVS</span>
          </span>

        </div>

      </div>
    </footer>
  );
}
