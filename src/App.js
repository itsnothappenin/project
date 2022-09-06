import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Login from './components/Login/login'
import { Routes, Route, Link } from "react-router-dom";
import VerticalSwiper from './components/Swiper/VerticalSwiper';
import EventPage from './components/EventPage';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="events" element={<Eventpage />} />
          <Route path="news" element={<Newspage />} />
          <Route path="favorites" element={<Favpage />} />
          <Route path="cart" element={<Cartpage />} />
        </Route>
      </Routes>
    </>
  )

}

function Home() {
  return (
    <><Header /><VerticalSwiper /><Cards /><UpcomingEvents /><Events /><Footer /></>
  )``
}

export default App;

function Eventpage() {
  return (
    <>
      <Header />
      <EventPage />
      <Footer />
    </>

  )
}

function Newspage() {
  return (
    <>
      <Header />
      newspage
      <Footer />


    </>

  )
}

function Favpage() {
  return (
    <>
      <Header />
      favpage
      <Footer />

    </>

  )
}

function Cartpage() {
  return (
    <>
      <Header />
      cartpage
      <Footer />
    </>

  )
}