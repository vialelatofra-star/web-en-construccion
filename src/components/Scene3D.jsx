import React from 'react';

export default function Scene3D() {
  return (
    <div className="w-full h-[60vh] md:h-[75vh] bg-[#87CEEB] relative overflow-hidden border-b-8 border-[#2A6B2D]">
      
      {/* Contenedor de Textos */}
      <div className="absolute top-8 left-0 w-full z-50 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2A6B2D] drop-shadow-md uppercase tracking-tighter">
          Estamos Construyendo
        </h1>
        <p className="mt-4 text-base md:text-lg font-bold text-[#A67C52] bg-white/80 backdrop-blur-md inline-block px-6 py-2 rounded-full shadow-sm border border-white/50">
          Preparando la mejor tecnología agroindustrial...
        </p>
      </div>

      {/* Escena 2.5D en CSS Puro */}
      <div 
        className="absolute bottom-0 w-full h-[70%] flex items-end justify-center perspective-[800px]"
        style={{ perspective: '800px' }}
      >
        {/* Suelo verde infinito en perspectiva 3D */}
        <div 
          className="absolute bottom-0 w-[200vw] h-[1000px] bg-gradient-to-t from-[#3D8C40] to-[#52B056]"
          style={{ 
            transform: 'rotateX(75deg) translateY(200px) translateZ(-100px)',
            transformOrigin: 'bottom center',
            boxShadow: 'inset 0 100px 100px rgba(0,0,0,0.1)'
          }}
        ></div>

        {/* Las Sales (Centro, Flotando Sutilmente) */}
        <div className="absolute bottom-[10%] md:bottom-[15%] z-20 flex flex-col items-center">
          <div className="absolute -bottom-2 w-16 h-3 bg-black/30 rounded-[100%] blur-md animate-[pulse_3s_ease-in-out_infinite]"></div>
          <img 
            src="/sales.png" 
            alt="Alimento Premium Indusales" 
            className="w-20 md:w-28 relative drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer animate-[float_4s_ease-in-out_infinite]" 
          />
        </div>

        {/* El Bovino interactuando (Se mueve horizontalmente y olfatea) */}
        <div 
          className="absolute z-30 bottom-[6%] md:bottom-[8%]"
          style={{ animation: 'walkCow 16s ease-in-out infinite alternate' }}
        >
          <img 
            src="/bovino.png" 
            alt="Bovino pastando" 
            className="w-64 md:w-[26rem] drop-shadow-xl"
            style={{ animation: 'sniffGrass 3s ease-in-out infinite' }}
          />
        </div>

        {/* Bloques de Heno - Decorativos Puros con CSS */}
        {/* Heno Izquierdo Frontal */}
        <div className="absolute bottom-[8%] left-[10%] md:left-[20%] z-40 animate-[float_6s_ease-in-out_infinite_reverse]">
          <div className="w-24 h-16 md:w-32 md:h-20 bg-[#E8C340] rounded shadow-xl border-t-4 border-l-4 border-[#F5D76E] border-b-4 border-r-4 border-[#C8A020] flex items-center justify-center">
             <div className="w-full h-1 bg-[#C8A020]/30 absolute top-1/2"></div>
             <div className="w-1 h-full bg-[#C8A020]/30 absolute left-1/2"></div>
          </div>
        </div>

        {/* Heno Derecho Medio */}
        <div className="absolute bottom-[20%] right-[10%] md:right-[25%] z-10">
          <div className="w-20 h-14 md:w-24 md:h-16 bg-[#E8C340] rounded shadow-xl border-t-4 border-l-4 border-[#F5D76E] border-b-4 border-r-4 border-[#C8A020]">
             <div className="w-full h-1 bg-[#C8A020]/30 absolute top-1/2"></div>
          </div>
        </div>

        {/* Heno Izquierdo Atrás */}
        <div className="absolute bottom-[35%] left-[25%] md:left-[35%] z-0 opacity-90 scale-75">
          <div className="w-16 h-12 bg-[#E8C340] rounded shadow-xl border-t-2 border-[#F5D76E] border-b-4 border-[#C8A020]"></div>
        </div>

      </div>

      <style>{`
        /* Animación de Caminata Horizontal */
        @keyframes walkCow {
          0% { transform: translateX(-35vw); }
          10% { transform: translateX(-35vw); } /* Pausa al inicio */
          90% { transform: translateX(35vw); }
          100% { transform: translateX(35vw); } /* Pausa al final */
        }
        
        /* Animación de Olfateo y Cabeceo */
        @keyframes sniffGrass {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(-6deg) translateY(12px); } /* Baja a olfatear */
          50% { transform: rotate(2deg) translateY(-2px); } /* Sube la cabeza */
          75% { transform: rotate(-4deg) translateY(8px); } /* Vuelve a oler rápido */
        }

        /* Flotación para las sales y el heno */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}
