import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'

function App() {
  return (
    <>
    <Header />
    <Cards />
    <UpcomingEvents />
    <Events />
    <Footer />
    </>
  )
    
}

export default App;
