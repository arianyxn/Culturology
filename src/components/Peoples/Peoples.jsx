import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Peoples.css';

import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';
import people5 from '../../assets/images/people5.jpg';
import people6 from '../../assets/images/people6.jpg';

const imageMap = {
  lopa: people1,
  chichimeka: people2,
  gaucho: people3,
  kazakhs: people4,
  bardi: people5,
  dolgans: people6,
};

function Peoples() {
  const [peoples, setPeoples] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/peoples/')
      .then((response) => response.json())
      .then((data) => {
        setPeoples(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
        setLoading(false);
      });
  }, []);

  const filteredPeoples = peoples.filter((people) =>
    people.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Загрузка...</div>;
  }

  const renderPlaceholders = () => {
    const placeholdersNeeded = 6 - filteredPeoples.length;
    return Array.from({ length: placeholdersNeeded > 0 ? placeholdersNeeded : 0 }).map((_, index) => (
      <div key={`placeholder-${index}`} className="people-card" style={{ background: '#f0f0f0', visibility: 'hidden' }}></div>
    ));
  };

  return (
    <div className="peoples">
      <h1>Народы мира</h1>
      <input
        type="text"
        placeholder="Поиск по народам..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="peoples-grid">
        {filteredPeoples.map((people) => (
          <Link key={people.id} to={`/peoples/${people.id}`} className="people-card">
            <img src={imageMap[people.id]} alt={people.name} className="people-image" />
            <div className="people-overlay">
              <h3 className="people-name">{people.name}</h3>
            </div>
          </Link>
        ))}
        {renderPlaceholders()}
        {filteredPeoples.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', height: '500px', lineHeight: '500px' }}>
            Ничего не найдено
          </div>
        )}
      </div>
    </div>
  );
}

export default Peoples;