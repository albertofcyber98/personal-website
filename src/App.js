import { Routes, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Portofolio from './pages/portofolio'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
