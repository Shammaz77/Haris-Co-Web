import './App.css';
import Router from './Routes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // Scroll to the top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency on pathname

  return (
    <div className="App">
      <Router /> {/* Router that manages routes */}
    </div>
  );
}

export default App;
