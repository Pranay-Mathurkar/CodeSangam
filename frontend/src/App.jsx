
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from '../src/pages/register';
import Login from '../src/pages/login';



function App() {
  return (
    <div className="App">

      <Router>




        <Routes>


         


          <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>


      </Router>
    </div>

  )
}

export default App
