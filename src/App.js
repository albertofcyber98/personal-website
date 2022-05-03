import { Routes, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/projects'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
