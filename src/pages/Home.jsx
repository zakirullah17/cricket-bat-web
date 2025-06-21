
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Products from '../components/Products';
// // import Featured from '../components/Featured';
// import Testimonials from '../components/Testimonials';
// import Stats from '../components/Stats';
// import Craftsmanship from '../components/Craftsmanship';
// import FAQ from '../components/Faq';
// import Newsletter from '../components/Newsletter';
// import About from '../components/About';
// import Team from '../components/Team';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import Mission from '../components/Mission';

// const Home = () => {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <Hero />
//       <Products />
//       {/* <Featured /> */}
//       <Testimonials />
//       <Stats />
//       <Craftsmanship />
//       <FAQ />
//       <Newsletter />
//       <About />
//       <Team />
//       <Contact />
//       <Mission />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Home;


import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Craftsmanship from '../components/Craftsmanship';
import FAQ from '../components/Faq';
import Newsletter from '../components/Newsletter';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Mission from '../components/Mission';

const Home = () => {
  return (
    <div className="font-sans">
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      
      <section id="products">
        <Products />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="craftsmanship">
        <Craftsmanship />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="newsletter">
        <Newsletter />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="team">
        <Team />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <section id="mission">
        <Mission />
      </section>
    </div>
  );
};

export default Home;