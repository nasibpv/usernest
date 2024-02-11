import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import MoreDetails from './components/More Details/MoreDetails';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        
        <Route path='/usernest' element={<Home/>}></Route>
        <Route path='/user' element={<Users/>}></Route>
        <Route path='/moredetails/:id' element={<MoreDetails/>}></Route>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
