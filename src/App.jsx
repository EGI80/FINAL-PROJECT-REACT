import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Storiespage from './pages/storiespage';
import Mobilepage from './pages/mobilpage';
import Penawaranpages from './pages/penawaran';
import Bmw from './pages/bmw';
import AboutPage from './pages/aboutpage';
import Bugatti from './pages/bugatti';
import Ferrari from './pages/ferrari';
import Lamborghini from './pages/lamborghini';
import Honda from './pages/honda';
import Ford from './pages/ford';
import Porsche from './pages/porsche';
import Navbar from './pages/navbar';
import Pembelian from './pages/pembelian';
import Team from './pages/team';
import LoginForm from './pages/Login'
import Footer from './pages/footer';
import Register from './pages/register';



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stories" element={<Storiespage />} />
          <Route path="/mobil" element={<Mobilepage />} />
          <Route path="/mobil/bmw" element={<Bmw />} />
          <Route path="/mobil/bugatti" element={<Bugatti />} />
          <Route path="/mobil/ferrari" element={<Ferrari />} />
          <Route path="/mobil/lamborghini" element={<Lamborghini />} />
          <Route path="/mobil/honda" element={<Honda />} />
          <Route path="/mobil/ford" element={<Ford />} />
          <Route path="/mobil/porsche" element={<Porsche />} />
          <Route path="/trick" element={<AboutPage />} />
          <Route path="/penawaran" element={<Penawaranpages />} />
          <Route path="/pembelian" element={<Pembelian />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
