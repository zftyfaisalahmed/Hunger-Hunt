import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Homepage from './Components/Homepage';
import ViewMore from './Components/ViewMore';
import ContactDetails from './Components/ContactDetails';
import Hero from './Components/Hero';
// import Footer from './Components/Footer';
import Footer1 from './Components/Footer1';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={'/'} element={<Hero />}/> 
        <Route path={'/homepage'} element={<Homepage />} />
        <Route path={`/view/:id`} element={<ViewMore />}/>
        <Route path={`/contact/:id`} element={<ContactDetails />}/>
      </Routes>
      <Footer1 />
    </BrowserRouter>
  );
}

export default App;


