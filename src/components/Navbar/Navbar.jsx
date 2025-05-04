import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/menu-icon.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      {isOpen && (
        <div className="menu">
          <Link to="/" onClick={toggleMenu}>Главная</Link>
          <Link to="/peoples" onClick={toggleMenu}>Народы</Link>
          <Link to="/books" onClick={toggleMenu}>Книги</Link>
          <div onClick={scrollToContacts}>Контакты</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;