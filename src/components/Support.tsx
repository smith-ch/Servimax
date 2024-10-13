import React from 'react';

const Support: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Support Team" className="rounded-lg shadow-xl" />
        </div>
        <div className="w-1/2 pl-12">
          <h2 className="text-4xl font-bold mb-4">Soporte de Calidad</h2>
          <p className="text-xl mb-6">
            Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier problema o consulta. 
            Nos enorgullecemos de ofrecer un servicio al cliente excepcional y soluciones rápidas para 
            mantener tus propiedades funcionando sin problemas.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">OBTENER SOPORTE AHORA</button>
        </div>
      </div>
    </section>
  );
};

export default Support;