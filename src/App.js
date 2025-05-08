import { Outlet } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Accueil from './pages/Accueil/Accueil';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="appContainer">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
