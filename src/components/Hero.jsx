import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544483863-14bf5ee6d2c4?q=80&w=2670&auto=format&fit=crop" 
          alt="Ganado en paisaje andino" 
          className="w-full h-full object-cover object-center opacity-70 mix-blend-overlay"
        />
        {/* Gradient Overlay using Italcol colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A6B2D]/90 via-[#3D8C40]/70 to-[#A67C52]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-xl">
          🚀 Próximo a salir a producción
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 max-w-4xl drop-shadow-md">
          Innovación para el Agro
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed font-light">
          Muy pronto el <span className="font-semibold text-white drop-shadow-sm">catálogo digital más avanzado de Colombia</span>. Estamos en las etapas finales de integración técnica.
        </p>
        
        <div className="mt-12">
          <button className="px-8 py-4 bg-white text-[#2A6B2D] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Conoce nuestro alcance
          </button>
        </div>
      </div>

      {/* Aesthetic Curve at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          className="relative block w-full h-[80px] md:h-[150px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.28,197.6,112.55,239.5,107.08,280.9,94.1,321.39,56.44Z" 
            className="fill-[#F5F7FA]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
