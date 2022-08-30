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
