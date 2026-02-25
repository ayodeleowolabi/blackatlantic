import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Afrocidade from "./pages/Afrocidade.jsx";
import Clave from "./pages/Clave.jsx";


export default function App() {
  return (
    <BrowserRouter>
    <div className="bg-base text-primary min-h-screen font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/afrocidade" element={<Afrocidade />} />
        <Route path="/clave" element={<Clave />} />
      </Routes>
    </div>
    </BrowserRouter>

  )
}