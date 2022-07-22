import logo from "./logo.svg";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import { Route, Routes } from "react-router-dom";
import Third from "./Components/Third/Third";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
        </Route>
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
