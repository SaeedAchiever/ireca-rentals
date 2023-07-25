import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
//import Landingpage from './components/Landingpage';
import HomeNote from './components/HomeNote';
//import FirstClassRental from './components/FirstClassRental';
import RentPage from './components/RentPage';
import SmallNote from './components/SmallNote';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import SaveMoney from './components/SaveMoney'
//import WhoAreWe from './components/WhoAreWe';
import Maps from './components/Maps';
//import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import RentNow from './components/RentNow';

function App() {
  return (
    <div className="App">
       <Navigation />
       {/*<Landingpage />*/}
       <HomeNote />
       {/*<FirstClassRental />*/}
       <RentPage />
       <SmallNote />
       <RentNow />
       <WhyUs />
       <SaveMoney />
        <Contact />
        {/*<WhoAreWe />*/}
        <Maps />
        {/*<Testimonial />*/}
        <Footer />
    </div>
  );
}

export default App;
