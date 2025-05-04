import React from 'react';
import { Link } from 'react-router-dom';
import './Peoples.css';

// Импортируем изображения для народов
import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';
import people5 from '../../assets/images/people5.jpg';
import people6 from '../../assets/images/people6.jpg';

const peoples = [
  { id: 'lopa', name: 'Лопа', image: people1 },
  { id: 'chichimeka', name: 'Чичимека', image: people2 },
  { id: 'gaucho', name: 'Гаучо', image: people3 },
  { id: 'kazakhs', name: 'Казахи', image: people4 },
  { id: 'bardi', name: 'Барди', image: people5 },
  { id: 'dolgans', name: 'Долганы', image: people6 },
];

function Peoples() {
  return (
    <div className="peoples">
      <h1>Народы мира</h1>
      <div className="peoples-grid">
        {peoples.map((people) => (
          <Link key={people.id} to={`/peoples/${people.id}`} className="people-card">
            <img src={people.image} alt={people.name} className="people-image" />
            <div className="people-overlay">
              <h3 className="people-name">{people.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Peoples;