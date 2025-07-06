import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeadTitle from "./component/HeadTitle";
import HeadNav from "./component/HeadNav";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <HeadTitle></HeadTitle>
        <HeadNav></HeadNav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
