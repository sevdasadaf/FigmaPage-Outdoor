
import './App.css';
import './Media.css';


import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import OurPromise from './components/OurPromise';
import MeetTheFamily from './components/MeetTheFamily';
import Shop from './components/Shop';
import BuyersGuide from './components/BuyersGuide';
import Magazine  from './components/Magazine';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='containers'>
    <Header/>
    <Intro />
    <About />
    <OurPromise />
    <MeetTheFamily />
    <Shop />
    <BuyersGuide />
    <Magazine />
    <Footer />
    
    </div>
    </>
  );
}

export default App;
