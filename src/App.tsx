import React from 'react';
import { Scan, Clock, Phone, MapPin, Calendar, Stethoscope, Home, Radio, Laptop } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Scan className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-semibold text-gray-800">VetDiagnose</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-pink-500">Serviços</a>
              <a href="#about" className="text-gray-600 hover:text-pink-500">Sobre</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1584486483122-af7d49cf2992?auto=format&fit=crop&w=2000&q=80"
          alt="Diagnóstico veterinário"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Diagnóstico por Imagem Veterinária</h1>
            <p className="text-xl mb-8">Tecnologia avançada e expertise para o melhor diagnóstico do seu pet</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Laptop className="h-8 w-8 text-pink-500" />}
              title="Teleradiologia"
              description="Laudos online em até 2 horas. Atendemos clínicas em todo o Brasil com nossa equipe especializada."
            />
            <ServiceCard
              icon={<Radio className="h-8 w-8 text-pink-500" />}
              title="Radiologia Digital"
              description="Equipamentos de última geração para diagnósticos precisos e detalhados."
            />
            <ServiceCard
              icon={<Stethoscope className="h-8 w-8 text-pink-500" />}
              title="Ultrassonografia"
              description="Exames completos realizados por especialistas, na clínica ou em domicílio."
            />
          </div>
        </div>
      </section>

      {/* Ultrasound Services Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Serviços de Ultrassonografia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceLocationCard
              icon={<Home className="h-12 w-12" />}
              type="Atendimento Domiciliar"
              description="Realizamos exames no conforto da sua casa, reduzindo o estresse do seu pet."
            />
            <ServiceLocationCard
              icon={<Scan className="h-12 w-12" />}
              type="Na Clínica"
              description="Ambiente especializado com equipamentos de última geração."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactInfo
              icon={<Phone className="h-6 w-6 text-pink-500" />}
              title="Telefone"
              info="(11) 99999-9999"
            />
            <ContactInfo
              icon={<Clock className="h-6 w-6 text-pink-500" />}
              title="Horário"
              info="Seg-Sáb: 8h-18h"
            />
            <ContactInfo
              icon={<MapPin className="h-6 w-6 text-pink-500" />}
              title="Localização"
              info="Rua dos Diagnósticos, 123 - São Paulo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Scan className="h-6 w-6 text-pink-500" />
            <span className="ml-2 text-xl font-semibold">VetDiagnose</span>
          </div>
          <p className="text-gray-400">© 2024 VetDiagnose. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-pink-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceLocationCard({ icon, type, description }) {
  return (
    <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4 text-pink-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{type}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}

export default App;