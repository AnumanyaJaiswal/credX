import { useState } from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App
