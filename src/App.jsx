import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
