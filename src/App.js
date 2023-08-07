// import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import New from './pages/New';
import Footer from './components/Footer'
import { Routes, Route, Link, } from 'react-router-dom';
import logo from './img/Group1.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="#">Sessions</Link>
            <Link to="#">Review</Link>
            <Link to="#">Contact</Link>
            <Link to="/new">New</Link>
            <Link to="#">About as</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className='header-button'>
            <div className='button'>
              Sign up now
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
