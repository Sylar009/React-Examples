import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // wheater dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <> 
      <Router>
        {/* <Navbar title="TextUtils" about="About US"/> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"  element={
              <About mode={mode}/>}
            />
            <Route exact path="/" element={
              <TextForm
                showAlert={showAlert}
                heading="Try Textutils ! - Word Counter, Character counter, Remove extra spaces. "
                mode={mode}
              />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
