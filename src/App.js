import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";

//pages
import NotFound from "./pages/NotFound";
import Saved from "./pages/Saved";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Saved" element={<Saved />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
