import React, { useState, useEffect } from 'react';

interface HeroProps {
  whatsappNumber?: string;
}

export default function Hero({ whatsappNumber = "573133467572" }: HeroProps) {
  const [showOutline, setShowOutline] = useState(false);
  const [showSolid, setShowSolid] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  
  // Nuevo mensaje persuasivo
  const fullText = "¿Tienes alguna duda? Pregúntanos";

  useEffect(() => {
    const t1 = setTimeout(() => setShowOutline(true), 100);
    const t2 = setTimeout(() => setShowSolid(true), 1600);
    const t3 = setTimeout(() => setShowBubble(true), 2200);

    const t4 = setTimeout(() => {
      let i = 0;
      const typeWriterInterval = setInterval(() => {
        i++;
        setDisplayedText(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(typeWriterInterval);
      }, 60); // Ligeramente más rápido por ser más largo
    }, 3000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [fullText]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e9ebe8] select-none cursor-default">
      <style>{`
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.7);
        }

        @keyframes throw-in {
          0% { transform: scale(2.5) translateZ(0); opacity: 0; filter: blur(4px); }
          50% { transform: scale(0.9) translateZ(0); opacity: 1; filter: blur(0px); }
          75% { transform: scale(1.05) translateZ(0); }
          100% { transform: scale(1) translateZ(0); opacity: 1; filter: blur(0px); }
        }
        .animate-throw {
          animation: throw-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes custom-vibrate {
          0%, 85% { transform: translate(0) rotate(0deg); }
          88% { transform: translate(-1.5px, 1px) rotate(-1deg); }
          91% { transform: translate(1.5px, -1px) rotate(1deg); }
          94% { transform: translate(-1.5px, 1px) rotate(-1deg); }
          97% { transform: translate(1.5px, -1px) rotate(1deg); }
          100% { transform: translate(0) rotate(0deg); }
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(29, 153, 71, 0.6); }
          70% { box-shadow: 0 0 0 10px rgba(29, 153, 71, 0); }
          100% { box-shadow: 0 0 0 0 rgba(29, 153, 71, 0); }
        }
        
        .animate-cta-combined {
          animation: pulse-ring 2.5s infinite, custom-vibrate 5s ease-in-out infinite;
        }
      `}</style>

      {/* Layer 1: Base Background */}
      <img 
        src="/hero-bg.png" 
        alt="Indusales Finca" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Layer 2: The Floating Bubble */}
      <div className={`absolute z-10 top-[72%] sm:top-[65%] md:top-[68%] left-1/2 -translate-x-1/2 transform transition-all duration-1000 ease-out w-[92%] sm:w-[88%] max-w-[400px] sm:max-w-[500px] md:max-w-[580px] ${
        showBubble ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}>
        <div className="bg-white/70 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 flex items-center justify-between pl-4 sm:pl-7 pr-1 sm:pr-1.5 py-1 sm:py-1.5 min-h-[42px] sm:min-h-[50px] w-full gap-1 sm:gap-2">
          
          <div className="flex-grow select-none pointer-events-none pr-1">
             <span className="text-gray-500 font-medium text-[10px] sm:text-sm md:text-[15px] font-sans tracking-tight drop-shadow-sm cursor-default whitespace-nowrap sm:whitespace-normal">
               {displayedText}
               {showBubble && displayedText.length < fullText.length && (
                 <span className="animate-pulse opacity-50 ml-0.5">|</span>
               )}
             </span>
          </div>

          <a 
            href={`https://wa.me/${whatsappNumber}?text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20novedades%20e%20informaci%C3%B3n%20sobre%20Indusales.%20%C2%A1Me%20encantar%C3%ADa%20ser%20el%20primero%20en%20enterarme!`} 
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-combined bg-[#1D9947] hover:bg-[#157936] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-semibold text-[10px] sm:text-sm transition-colors cursor-pointer pointer-events-auto flex items-center whitespace-nowrap shadow-sm group"
          >
            {/* Ícono de WhatsApp añadido */}
            <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Layer 4: UI overlay */}
      <div className="absolute top-[28%] sm:top-[42%] left-[52%] sm:left-[53%] -translate-x-1/2 z-30 pointer-events-none flex justify-center w-max px-4">
        <div className="relative w-full">
          <div className={`absolute top-0 left-0 w-full transition-all duration-[600ms] ease-out ${
             showSolid 
               ? 'translate-x-0 translate-y-0' 
               : '-translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4 md:-translate-x-5 md:-translate-y-5'
          }`}>
            <h1 className={`text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-outline text-center leading-none tracking-tight font-sans opacity-0 ${showOutline ? 'animate-throw' : ''}`}>
              PRÓXIMAMENTE
            </h1>
          </div>
          
          <h1 className={`relative z-10 text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white text-center leading-none drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)] tracking-tight font-sans opacity-0 ${showSolid ? 'animate-throw' : ''}`}>
            PRÓXIMAMENTE
          </h1>
        </div>
      </div>
    </section>
  );
}
