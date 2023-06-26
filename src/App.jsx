import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <footer>&copy; 2023 IntegerStore</footer>
    </BrowserRouter>
  );
}
