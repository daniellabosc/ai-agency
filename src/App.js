import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
//import Services from './sections/services/Services'
//import WhoWeAre from './sections/whoweare/WhoWeAre'
//import Schedule from './sections/schedule/Schedule'
//import Features from './sections/features/Features'
//import Benefits from './sections/benefits/Benefits'
//import Portfolio from './sections/portfolio/Portfolio'
//import WhatWeDo from './sections/whatwedo/WhatWeDo'
//import Process from './sections/process/Process'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Services />
      <WhatWeDo />
      <Schedule />
      <Features />
      <Benefits />
      <Schedule />
      <WhoWeAre />
      <Process />
      <Portfolio /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
