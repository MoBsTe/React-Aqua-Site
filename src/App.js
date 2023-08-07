import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
