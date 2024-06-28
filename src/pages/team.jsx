import React from 'react';
import '../css/team.css';

const TeamMember = (props) => (
  <div className="tim-member">
    <img src={props.imgSrc} alt={props.name} className="member-img" />
    <h3>{props.name}</h3>
    <p>{props.id}</p>
    <div className="social-icons">
      <a href={props.instagram} className="social-icon"><i className="fab fa-instagram"></i></a>
      <a href={props.github} className="social-icon"><i className="fab fa-github"></i></a>
      <a href={`mailto:${props.email}`} className="social-icon"><i className="fas fa-envelope"></i></a>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'EGI DIAN ADI PRADANA',
      id: '22.11.4745',
      imgSrc: './img/EGI DIAN ADI PRADANA.jpg',
      instagram: 'https://www.instagram.com/001ardhana?igsh=bzhqNGc3N25nODB6&utm_source=qr',
      github: 'https://github.com/EGI80',
      email: 'EGI DIAN ADI PRADANA'
    },
    {
      name: 'SALMAN AL FARISY',
      id: '22.11.4707',
      imgSrc: './img/SALMAN AL FARISY.jpg',
      instagram: 'https://www.instagram.com/slmnlfrsy_?igsh=MXJ5Z3EyeDRhMjkxaA==',
      github: 'https://github.com/zyy993',
      email: 'salmanalfarisy4707@students.amikom.ac.id'
    },
    {
      name: 'EUODEO PAVENDA PUTRA',
      id: '22.11.4705',
      imgSrc: './img/DEO PAVENDA PUTRA.jpg',
      instagram: 'https://www.instagram.com/deopavenda?igsh=MXIxejFoNXZlZjF0Nw==',
      github: 'https://github.com/deopavenda',
      email: 'deopavenda@students.amikom.ac.id'
    },
    {
      name: 'MUHAMMAD GHOZI ALGHIFARI',
      id: '22.11.4682',
      imgSrc: './img/ghifar.jpg',
      instagram: '#',
      github: '#',
      email: 'ghozi@example.com'
    },
    {
      name: 'HAMKA NANDA ERINDRA',
      id: '22.11.4683',
      imgSrc: './img/HAMKA.jpg',
      instagram: 'https://www.instagram.com/haka_mii/',
      github: 'https://github.com/misakisimp',
      email: 'hamkananda@students.amikom.ac.id'
    }
  ];

  return (
    <div className="tim-container">
      <div className="tim-header">
        <h1>Tim Kami</h1>
        <p>Kenali lebih dekat dengan tim profesional kami.</p>
      </div>
      <div className="tim-container-member">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            id={member.id}
            imgSrc={member.imgSrc}
            instagram={member.instagram}
            github={member.github}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
