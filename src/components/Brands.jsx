import React from 'react';

const brandsInfo = [
  {
    name: 'Ganafort',
    role: 'Sales mineralizadas técnicas',
    color: 'from-[#3D8C40] to-[#2A6B2D]',
    icon: '🌾'
  },
  {
    name: 'Nutrepro',
    role: 'Nutrición de precisión',
    color: 'from-[#A67C52] to-[#7A5836]',
    icon: '🔬'
  },
  {
    name: 'NBA',
    role: 'Suplementos ruminales',
    color: 'from-[#52B056] to-[#3D8C40]',
    icon: '⚡'
  },
  {
    name: 'Ganadero',
    role: 'Línea comercial',
    color: 'from-[#8C6D53] to-[#A67C52]',
    icon: '🐄'
  }
];

const Brands = () => {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight mb-4">
            Ecosistema de Líneas Especializadas
          </h2>
          <p className="text-lg text-gray-600">
            Nuestro portafolio integral cuenta con más de 30 productos para cada etapa productiva del ganado. 
            Próximamente disponible en formato 100% digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandsInfo.map((brand, index) => (
            <div 
              key={brand.name} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md bg-gradient-to-br ${brand.color} text-white group-hover:scale-110 transition-transform`}>
                {brand.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-gray-600 font-medium">{brand.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
