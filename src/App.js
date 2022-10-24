import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createblog from "./components/CreateBlog/Createblog";
import ViewBlog from "./components/ViewBlog/ViewBlog";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createblog" element={<Createblog />}></Route>
          <Route path="/viewblog" element={<ViewBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
