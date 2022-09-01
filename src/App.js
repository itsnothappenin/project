import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Login from './components/Login/login'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path ="events" element={<Eventpage />} /> 
          <Route path ="news" element={<Newspage />} />
          <Route path="favorites" element={<Favpage />} />
          <Route path="cart" element={<Cartpage />} />
        </Route>
      </Routes>
    </>
  )

}

function Home() {
  return (
    <><Header /><Cards /><UpcomingEvents /><Events /><Footer /></>
  )
}

export default App;

function Eventpage() {
  return (
    <>
      <Header />
      Eventpage
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