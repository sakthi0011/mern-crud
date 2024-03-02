
import Create from "./components/Create";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Read from "./components/Read";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
