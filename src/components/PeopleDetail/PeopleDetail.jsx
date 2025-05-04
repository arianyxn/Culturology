import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PeopleDetail.css';

// Импортируем новые изображения для детальных страниц
import lopaDetail from '../../assets/images/lopa_detail.jpg';
import chichimekaDetail from '../../assets/images/chichimeka_detail.jpg';
import gauchoDetail from '../../assets/images/gaucho_detail.jpg';
import kazakhsDetail from '../../assets/images/kazakhs_detail.jpg';
import bardiDetail from '../../assets/images/bardi_detail.jpg';
import dolgansDetail from '../../assets/images/dolgans_detail.jpg';

// Импортируем изображения для карточек (оригинальные)
import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import people4 from '../../assets/images/people4.jpg';
import people5 from '../../assets/images/people5.jpg';
import people6 from '../../assets/images/people6.jpg';

// Данные о народах с описанием и новыми изображениями
const peoples = [
  {
    id: 'lopa',
    name: 'Лопа',
    image: people1,
    detailImage: lopaDetail,
    description:
      'Лопа — народ, проживающий в северных регионах, известный своими традициями рыболовства и оленеводства. Они имеют богатую культуру, связанную с суровой природой.',
  },
  {
    id: 'chichimeka',
    name: 'Чичимека',
    image: people2,
    detailImage: chichimekaDetail,
    description:
      'Чичимека — группа коренных народов Мексики, известных своей воинственностью и кочевым образом жизни. Их культура богата традициями и ритуалами.',
  },
  {
    id: 'gaucho',
    name: 'Гаучо',
    image: people3,
    detailImage: gauchoDetail,
    description:
      'Гаучо — кочевые скотоводы Южной Америки, особенно Аргентины и Уругвая. Они знамениты своим мастерством верховой езды и уникальным фольклором.',
  },
  {
    id: 'kazakhs',
    name: 'Казахи',
    image: people4,
    detailImage: kazakhsDetail,
    description:
      'Казахи — тюркский народ, проживающий в Центральной Азии. Их культура тесно связана с кочевым образом жизни, традициями гостеприимства и коневодством.',
  },
  {
    id: 'bardi',
    name: 'Барди',
    image: people5,
    detailImage: bardiDetail,
    description:
      'Барди — коренной народ Австралии, проживающий на северо-западе континента. Они известны своими традициями рыболовства и глубоким знанием природы.',
  },
  {
    id: 'dolgans',
    name: 'Долганы',
    image: people6,
    detailImage: dolgansDetail,
    description:
      'Долганы — коренной народ Сибири, проживающий в Таймыре. Их культура связана с оленеводством, охотой и традиционными ремёслами.',
  },
];

function PeopleDetail() {
  const { id } = useParams();
  const people = peoples.find((p) => p.id === id);

  if (!people) {
    return <div>Народ не найден</div>;
  }

  return (
    <div className="people-detail">
      <Link to="/peoples" className="back-button">← Назад к народам</Link>
      <h1>{people.name}</h1>
      <div className="detail-image-container">
        <img src={people.detailImage} alt={people.name} className="detail-image" />
      </div>
      <p>{people.description}</p>
    </div>
  );
}

export default PeopleDetail;