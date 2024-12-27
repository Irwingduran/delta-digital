import React from 'react';

const teamMembers = [
  {
    name: 'Gerardo',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Arturo Robles',
    role: 'CTO',
    image: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Irwing Durán',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Ilse',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-12" id="team">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
        <p className="text-gray-600 mb-8">Conoce a las personas detrás del éxito de nuestros proyectos.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-blue-700 hover:text-blue-900">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.social.facebook} className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
