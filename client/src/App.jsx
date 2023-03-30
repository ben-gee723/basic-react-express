import { Routes, Route }from 'react-router-dom'
import './styles/App.scss';

// Komponenten
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <div className='main'>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>

            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;