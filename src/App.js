import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpComponent from "./Components/SignUpComponent";
import LoginComponent from "./Components/LoginComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<SignUpComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
