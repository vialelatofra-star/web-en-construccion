import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder - asumiendo que no hay logo todavía, creamos uno estético con CSS */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3D8C40] to-[#52B056] flex items-center justify-center shadow-lg shadow-[#3D8C40]/30">
            <span className="text-white font-bold text-xl tracking-tighter">IND</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">Indusales</span>
            <span className="text-xs text-[#A67C52] font-semibold uppercase tracking-widest mt-1">Colombia S.A.S.</span>
          </div>
        </div>
        
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D8C40]/10 text-[#2A6B2D] text-sm font-medium border border-[#3D8C40]/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Sitio en Desarrollo Técnico
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
