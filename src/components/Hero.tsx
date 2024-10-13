import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">PROPERTY MANAGEMENT IS NOW</h1>
        <h2 className="text-7xl font-bold mb-8">BEAUTIFUL & POWERFUL</h2>
        <p className="text-xl mb-8">SERVIMAX is a comprehensive property management service that will change your business.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">GET STARTED NOW</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;