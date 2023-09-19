import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/home/Home";
import AboutMe from "./Components/about/AboutMe";
import Skills from "./Components/skills/Skills";
import Qualification from "./Components/qualification/Qualification";
import Contact from "./Components/contact/Contact";
import { ScrollUp } from "./Components/scrollup/ScrollUp";
import Footer from "./Components/footer/Footer";
import Work from "./Components/portfolio/Work";
import { motion, useInView, useAnimation } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          duration={{ duration: 0.7, delay: 0.27 }}
        >
          <Home />

          <AboutMe />
          <Skills />
          <Qualification />
          <Work />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
