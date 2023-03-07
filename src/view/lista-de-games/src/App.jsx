import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Novo from './pages/Novo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/games/novo' element={<Novo />} />
            <Route path="/games/:id/editar" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
