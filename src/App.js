import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
//import Usecases from "./sections/usecases/Usecases";
import Blog from "./sections/blog/Blog";
import Process from "./sections/process/Process";
import Products from "./sections/products/Products";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Process />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
