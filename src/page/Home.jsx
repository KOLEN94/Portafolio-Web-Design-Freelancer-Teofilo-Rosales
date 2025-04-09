
import Navbar from '../components/NavBar/Navbar';
import Hero from '../components/Hero/Hero';
import Sobremi from '../components/Sobre-mi/Sobre-mi';
import Servicios from '../components/Servicios/Servicios';
import Habilidades from '../components/Habilidades/Habilidades';
import Portafolio from '../components/Portafolio/Portafolio';
import Testimonios from '../components/Testimonios/Testimonios';
import Contacto from '../components/Contacto/Contacto';
import Whatsapp from '../components/botonwhatsapp/Whatsapp';

import Footer from '../components/Footer/Footer';

const Home = () => {


  return (
    <>
      
      <Navbar />
      <Hero />
      <Sobremi />
      <Servicios />
      <Habilidades />
      <Portafolio />
      <Testimonios />
      <Contacto />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
