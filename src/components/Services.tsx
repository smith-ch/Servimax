import React from 'react';
import { Home, Briefcase, Truck, DollarSign, Wrench, Building } from 'lucide-react';

const services = [
  { icon: Home, title: 'Administración de Propiedades', description: 'Gestión integral de propiedades residenciales y comerciales.' },
  { icon: Wrench, title: 'Limpieza y Mantenimiento', description: 'Servicios profesionales de limpieza y mantenimiento para todo tipo de propiedades.' },
  { icon: Briefcase, title: 'Gestión de Alquileres Vacacionales', description: 'Administración de propiedades en plataformas como Airbnb y Brookings.' },
  { icon: Building, title: 'Suministros de Construcción', description: 'Provisión de materiales de construcción, hormigón y servicios de colocación.' },
  { icon: DollarSign, title: 'Consultoría Financiera y Marketing', description: 'Asesoramiento experto en finanzas y estrategias de marketing.' },
  { icon: Truck, title: 'Servicios de Transporte y Logística', description: 'Soluciones eficientes de transporte y logística para empresas.' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;