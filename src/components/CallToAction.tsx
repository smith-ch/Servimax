import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-purple-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">¡Comienza a Gestionar tus Propiedades Hoy!</h2>
        <p className="text-xl mb-8">Las propiedades son el futuro. Obtén la gestión del futuro.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">REGÍSTRATE HOY</button>
      </div>
    </section>
  );
};

export default CallToAction;