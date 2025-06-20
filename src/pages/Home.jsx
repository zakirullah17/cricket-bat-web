
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
// import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Craftsmanship from '../components/Craftsmanship';
import FAQ from '../components/Faq';
import Newsletter from '../components/Newsletter';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      {/* <Featured /> */}
      <Testimonials />
      <Stats />
      <Craftsmanship />
      <FAQ />
      <Newsletter />
      <About />
      <Team />
      <Contact />
      <Mission />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;