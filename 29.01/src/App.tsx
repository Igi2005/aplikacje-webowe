import './App.scss'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import Navbar from './Components/Nav'
import { routes } from './Helpers/router.tsx'
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      <Navbar/>
      <Footer/>
    </Router>
  )
}

export default App