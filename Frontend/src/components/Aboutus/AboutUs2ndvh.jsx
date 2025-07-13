import React, { useState } from 'react';

const services = {
  webdev: {
    title: 'Web Development',
    desc: 'We build responsive websites using React, Node.js, and full-stack tech.',
    features: ['Custom Web Apps', 'E-commerce', 'API Development', 'DB Design']
  },
  aiml: {
    title: 'AI/ML',
    desc: 'Automate and gain insights with intelligent AI/ML systems.',
    features: ['Analytics', 'NLP', 'Computer Vision', 'Recommendations']
  },
  creatives: {
    title: 'Creatives',
    desc: 'We create stunning designs and brand experiences.',
    features: ['Brand Design', 'UI/UX', 'Motion Graphics', 'Illustrations']
  },
  corporate: {
    title: 'Corporate',
    desc: 'Optimize operations with our digital corporate solutions.',
    features: ['Consulting', 'Automation', 'Transformation', 'Project Mgmt']
  }
};

const serviceCards = [
  { id: 'webdev', name: 'Web Dev', icon: '🌐' },
  { id: 'aiml', name: 'AI/ML', icon: '🤖' },
  { id: 'creatives', name: 'Creatives', icon: '🎨' },
  { id: 'corporate', name: 'Corporate', icon: '🏢' }
];

function ServicesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-t from-cyan-200 via-cyan-500 to-fuchsia-50 flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold text-purple-700 mb-12">Services We Provide</h2>

      <div className={`grid gap-10 w-full max-w-6xl ${selected ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {serviceCards.map(card => (
            <div
              key={card.id}
              onClick={() => setSelected(card.id)}
              className={`cursor-pointer bg-white rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-purple-200 ${
                selected === card.id ? 'bg-purple-100 scale-105 shadow-lg' : ''
              }`}
            >
              <div className="text-5xl mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold text-purple-800">{card.name}</h3>
            </div>
          ))}
        </div>

        {selected && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl font-bold text-purple-600 hover:text-purple-800"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">{services[selected].title}</h3>
            <p className="text-gray-600 mb-4">{services[selected].desc}</p>
            <ul className="space-y-2">  
              {services[selected].features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesSection;
