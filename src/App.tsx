import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ServiceAreaPage from './pages/service-area';
import CityPage from './pages/city';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/werkgebied" element={<ServiceAreaPage />} />
        <Route path="/werkgebied/:city" element={<CityPage />} />
      </Routes>
    </>
  );
}

export default App;