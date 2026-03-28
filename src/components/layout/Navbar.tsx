import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[96%] max-w-[1400px] z-50 select-none cursor-default">
      <style>{`
        /* 1. El vagón entra alineado a la izquierda para asomarse desde detrás de Indusales */
        @keyframes wagon-slide {
          0% { transform: translateX(-45vw); opacity: 0; }
          4% { opacity: 1; }
          45%, 100% { transform: translateX(0); opacity: 1; } /* Alcanza el centro puro sin temblar ni saltar */
        }
        
        /* 2. La vaca y la soga están ancladas al final derecho de las letras. Se separan al 45% */
        @keyframes cow-detach {
          0%, 45% { transform: translateX(0); opacity: 1; }
          95%, 100% { transform: translateX(35vw); opacity: 0; }
        }

        /* 3. La vaca camina */
        @keyframes cow-trot {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }

        .animate-wagon {
          animation: wagon-slide 14s linear forwards;
        }
        .animate-cow-detach {
          animation: cow-detach 14s linear forwards;
        }
        .animate-cow-trot {
          animation: cow-trot 0.6s infinite;
        }
      `}</style>

      {/* Casing for the modern "pill" style navbar sin demarcaciones ni cajas. Altura estricta para que el logo se expanda dentro sin cambiar la barra. */}
      <div className="bg-gray-100/30 backdrop-blur-xl border border-white/30 shadow-[0_4px_24px_0_rgba(31,38,135,0.05)] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex justify-between items-center transition-all h-12 sm:h-14 relative">
        
        {/* Indusales a la izquierda. Fuente oscura, gruesa y muy contrastante. Responsive (pequeño en móvil). */}
        <div className="flex-shrink-0 flex items-center justify-start w-auto sm:w-48 z-10 pr-2 sm:pr-4 bg-transparent relative">
          <span className="text-[#135a24] font-extrabold text-[12px] sm:text-[1.35rem] tracking-[0.1em] sm:tracking-[0.15em] uppercase font-sans drop-shadow-md">
            Indusales
          </span>
        </div>
        
        {/* Espacio Medio Restringido */}
        <div className="flex-grow h-full relative overflow-hidden pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center animate-wagon">
             <div className="relative flex items-center">
               <span className="text-gray-700/90 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[9px] sm:text-[11px] md:text-sm drop-shadow-sm whitespace-nowrap">
                 Página en construcción
               </span>
               <div className="absolute left-full animate-cow-detach flex items-center ml-1 sm:ml-2">
                 <div className="w-[12px] sm:w-[15px] h-[2px] bg-gray-500 rounded-full mr-1 drop-shadow-sm"></div>
                 <div className="relative flex items-end animate-cow-trot pt-2">
                   <span className="text-2xl sm:text-[1.65rem] leading-none mb-0.5 transform scale-x-[-1] grayscale contrast-125 drop-shadow-sm">🐄</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Logo original expandido milimétricamente. Responsivo (pequeño en móvil). */}
        <div className="flex-shrink-0 flex items-center justify-end w-auto sm:w-48 z-10 pl-2 sm:pl-4 bg-transparent relative h-full py-0.5">
          <img 
            className="h-5 sm:h-full w-auto object-contain drop-shadow-sm mix-blend-multiply" 
            src="/logo.png" 
            alt="Indusales Colombia S.A.S" 
          />
        </div>

      </div>
    </nav>
  );
}
