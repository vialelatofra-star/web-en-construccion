import React from 'react';

const TechStack = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative blurry background circles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-[#3D8C40]/5 rounded-full blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-[#A67C52]/5 rounded-full blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-sm font-semibold text-[#A67C52] tracking-widest uppercase mb-4">
          Infraestructura Técnica
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 max-w-2xl mx-auto">
          Corriendo sobre arquitectura de vanguardia para garantizar seguridad y velocidad
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-4xl">🚀</span>
            <span className="text-sm font-bold text-gray-600 group-hover:text-[#FA5A28]">Astro</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-4xl">⚛️</span>
            <span className="text-sm font-bold text-gray-600 group-hover:text-[#61DAFB]">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-4xl">🟢</span>
            <span className="text-sm font-bold text-gray-600 group-hover:text-[#5FA04E]">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-4xl">🍃</span>
            <span className="text-sm font-bold text-gray-600 group-hover:text-[#47A248]">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
