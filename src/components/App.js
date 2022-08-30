import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Login from './components/Login/login';
// import {Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
      <Login />
      {/* <Header />
      <Cards />
      <UpcomingEvents />
      <Events />
      <Footer /> */}
    </>

  //   <>
  //     <nav>
  //       {/* <Link to="/login">Login</Link>
  //       <Link to="/">Home</Link> */}
  //     </nav>
  //     {/* <Routes>
  //       <Route index element={<h1>Home page</h1>} />
  //       <Route path="/login" element={<h1>Login page</h1>} />
  //     </Routes> */}
  //   </>
   );
}

    

export default App;
