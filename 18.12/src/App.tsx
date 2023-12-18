import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About/index.tsx"
import Homepage from "./pages/Homepage/index.tsx"
import Navbar from "./Components/Navbar/index.tsx"

function App() {


  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
  )
}

export default App
