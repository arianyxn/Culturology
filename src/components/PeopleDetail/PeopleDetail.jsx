import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PeopleDetail.css';

import lopa_detail from '../../assets/images/lopa_detail.jpg';
import chichimeka_detail from '../../assets/images/chichimeka_detail.jpg';
import gaucho_detail from '../../assets/images/gaucho_detail.jpg';
import kazakhs_detail from '../../assets/images/kazakhs_detail.jpg';
import bardi_detail from '../../assets/images/bardi_detail.jpg';
import dolgans_detail from '../../assets/images/dolgans_detail.jpg';

const imageMap = {
  lopa: lopa_detail,
  chichimeka: chichimeka_detail,
  gaucho: gaucho_detail,
  kazakhs: kazakhs_detail,
  bardi: bardi_detail,
  dolgans: dolgans_detail,
};

function PeopleDetail() {
  const { id } = useParams();
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/peoples/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!people) {
    return <div>Народ не найден</div>;
  }

  return (
    <div className="people-detail">
      <Link to="/peoples" className="back-button">← Назад к народам</Link>
      <h1>{people.name}</h1>
      <div className="detail-image-container">
        <img src={imageMap[people.id]} alt={people.name} className="detail-image" />
      </div>
      <p>{people.description}</p>
    </div>
  );
}

export default PeopleDetail;