import React from 'react';
import './footer.css';

function Footer() {
  const members = [
    {
      name: 'Gustavo Borges Hertz',
      avatar: 'https://media.licdn.com/dms/image/D4D03AQGPfZkY6w-9vQ/profile-displayphoto-shrink_200_200/0/1698778900667?e=1731542400&v=beta&t=1h80wK8JakK5YHxfRVV_xUJSKfz96Cq2oiSC8G1iIlU',
      linkedin: 'https://www.linkedin.com/in/gustavo-borges-hertz-a3b46326a/'
    }
  ];

  return (
    <footer className="footer">
      <h3>Nosso Time</h3>
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="member">
            <img src={member.avatar} alt={member.name} className="avatar" />
            <div className="member-info">
              <p>{member.name}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
