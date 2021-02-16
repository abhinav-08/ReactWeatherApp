import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import WeatherInfo from "./Components/WeatherInfo";
import footer from "./Components/Footer";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <WeatherInfo/>
      <Footer/>
    </div>
  );
}

export default App;
