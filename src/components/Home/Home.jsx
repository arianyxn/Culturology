import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Globe from '../Globe/Globe.jsx';
import introMp4 from '../../assets/videos/intro.mp4';
import image1 from '../../assets/images/photo1.jpg';
import image2 from '../../assets/images/photo2.jpg';
import image3 from '../../assets/images/photo3.jpg';
import image4 from '../../assets/images/photo4.jpg';
import image5 from '../../assets/images/photo5.jpg';
import image6 from '../../assets/images/photo6.jpg';

function Home() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageReversed, setCurrentImageReversed] = useState(0);
  const images = [image1, image2, image3];
  const imagesReversed = [image4, image5, image6];

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    const intervalReversed = setInterval(() => {
      setCurrentImageReversed((prev) => (prev + 1) % imagesReversed.length);
    }, 3000);

    return () => {
      if (headingRef.current) headingObserver.unobserve(headingRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
      clearInterval(interval);
      clearInterval(intervalReversed);
    };
  }, []);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handleNextImageReversed = () => {
    setCurrentImageReversed((prev) => (prev + 1) % imagesReversed.length);
  };

  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="intro-video">
          <source src={introMp4} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="video-overlay">
          <h1 ref={headingRef}>Добро пожаловать в захватывающий и таинственный мир!</h1>
          <div className="hero-text" ref={textRef}>
            <p>Погрузитесь в удивительный мир традиций и обычаев.</p>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="description-section">
          <div className="image-slider" onClick={handleNextImage}>
            <div className="image-stack">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Memory ${index + 1}`}
                  className={index === currentImage ? 'active' : 'inactive'}
                />
              ))}
            </div>
          </div>
          <div className="description-text">
            <p>Открой для себя уникальные традиции, язык и образ жизни народов, о которых ты, возможно, никогда не слышал</p>
            <p>Мир полон культурного разнообразия, но многие народы остаются вне внимания. Наше приложение создано для того, чтобы рассказать о жизни, верованиях, праздниках и искусстве этносов, чья история и обычаи незаслуженно забыты.</p>
          </div>
        </div>

        <div className="description-section-reversed">
          <div className="description-text-reversed">
            <p>Культуры малых народов — забытые истории, живые традиции</p>
            <p>На нашей планете живут сотни народов с уникальными языками, обычаями и взглядами на жизнь. Но многие из них остаются в тени, теряя свою культуру под давлением глобализации. Это приложение создано, чтобы дать голос тем, кого редко слышат.</p>
          </div>
          <div className="image-slider-reversed" onClick={handleNextImageReversed}>
            <div className="image-stack">
              {imagesReversed.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Memory ${index + 4}`}
                  className={index === currentImageReversed ? 'active' : 'inactive'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="globe-section">
          <h2 className="three-d-heading">Каждая культура достойна быть замеченной</h2>
          <Globe />
        </div>
      </div>
    </div>
  );
}

export default Home;