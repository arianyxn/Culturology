import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Peoples from './components/Peoples/Peoples.jsx';
import PeopleDetail from './components/PeopleDetail/PeopleDetail.jsx';
import Books from './components/Books/Books.jsx'; // Добавим позже
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/peoples" element={<Peoples />} />
              <Route path="/peoples/:id" element={<PeopleDetail />} />
              <Route path="/books" element={<Books />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}

export default App;