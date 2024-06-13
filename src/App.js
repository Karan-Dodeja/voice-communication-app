import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/navigation.jsx";
import "./App.css";
import Register from "./pages/Home/Register/Register.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
