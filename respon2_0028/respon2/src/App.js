import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeadTitle from "./component/HeadTitle";
import HeadNav from "./component/HeadNav";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bungkus">
        <HeadTitle></HeadTitle>
        <HeadNav></HeadNav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
