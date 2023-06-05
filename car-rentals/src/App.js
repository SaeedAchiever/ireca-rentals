import './App.css';
import Navigation from './components/Navigation';
import HeroHome from './components/HeroHome';
import HomeNote from './components/HomeNote';
import FirstClassRental from './components/FirstClassRental';
import RentPage from './components/RentPage';
import SmallNote from './components/SmallNote';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import SaveMoney from './components/SaveMoney'

function App() {
  return (
    <div className="App">
       <Navigation />
       <HeroHome />
       <HomeNote />
       <FirstClassRental />
       <RentPage />
       <SmallNote />
       <WhyUs />
       <SaveMoney />
        <Contact />
    </div>
  );
}

export default App;
