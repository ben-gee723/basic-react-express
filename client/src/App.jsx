import { Routes, Route }from 'react-router-dom'
import './styles/App.scss';
import store from './store/Context';

// Komponenten
import NavBar from './components/NavBar'
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {
  const { user } = store()

  return (
    <div className="App">
      <div className='main'>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                {user 
                  ?
                    <>
                      <Route index element={<Home/>}/>
                      <Route path='*' element={<NotFound/>}/>
                    </>
                  : <>
                      <Route index element={<Login/>}/>
                      <Route path='*' element={<NotFound/>}/>
                    </>
                }
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;