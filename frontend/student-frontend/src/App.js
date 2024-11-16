
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayData from "./DisplayData";
import StudentForm from "./StudentForm";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StudentForm setFormData={setFormData} />} />
          <Route path="/display" element={<DisplayData FormData={formData} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
