import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

// Lazy load pages
const HomePage = lazy(() => import('./pages/home'));
const ServiceAreaPage = lazy(() => import('./pages/service-area'));
const CityPage = lazy(() => import('./pages/city'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-flex items-center gap-2">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600">Laden...</span>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/werkgebied" element={<ServiceAreaPage />} />
          <Route path="/werkgebied/:city" element={<CityPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;