import { Routes, Route }from 'react-router-dom'
import './styles/App.scss';

// Komponenten
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <div className='main'>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>

                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;