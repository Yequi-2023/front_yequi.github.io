import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from '../schemas/Login';
import { Inicio } from './components/Inicio';
import './styles/Login.css'
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/inicio" element={<Inicio/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
