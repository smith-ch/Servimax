import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EMPRESA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-400">Acerca de SERVIMAX</a></li>
              <li><a href="#" className="hover:text-blue-400">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-400">Planes y Precios</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">OBTENER AYUDA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Base de Conocimientos</a></li>
              <li><a href="#" className="hover:text-blue-400">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-blue-400">Foro</a></li>
              <li><a href="#" className="hover:text-blue-400">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMACIÓN LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400">Términos de Servicio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SUSCRÍBETE</h3>
            <p className="mb-4">Recibe nuestras últimas noticias y ofertas</p>
            <div className="flex">
              <input type="email" placeholder="Tu email" className="bg-gray-700 text-white px-4 py-2 rounded-l-lg w-full" />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg">OK</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 SERVIMAX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;