import React from 'react';

const plans = [
  { name: 'BÁSICO', price: '$100', features: ['1 Propiedad', '24/7 Mantenimiento', 'Gestión de Alquileres', 'Soporte por Email'] },
  { name: 'PRO', price: '$200', features: ['5 Propiedades', '24/7 Mantenimiento', 'Gestión de Alquileres', 'Soporte Prioritario', 'Informes Mensuales'] },
  { name: 'EMPRESARIAL', price: '$500', features: ['Propiedades Ilimitadas', '24/7 Mantenimiento', 'Gestión de Alquileres', 'Soporte VIP', 'Informes Personalizados', 'Consultoría Estratégica'] },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">NUESTROS PRECIOS SON SIMPLES</h2>
        <p className="text-xl text-center mb-12">Sin compromisos. Sin tarjetas de crédito requeridas. ¡Comience su prueba de 14 días hoy!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal">/mes</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold">EMPEZAR AHORA</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;