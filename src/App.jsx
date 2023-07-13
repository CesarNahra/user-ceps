import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login/Login.page';
import { HomePage } from './pages/Home/Home.page';
import { LocalStorageService } from './services/User/LocalStorage.service';

if(!LocalStorageService.get('users')) {
  LocalStorageService.set('users', [
    {
      id: 1,
      email: 'admin@usercep.com',
      password: '12345678'
    },
    {
      id: 2,
      email: 'usuario@usercep.com',
      password: '432132423'
    },
    {
      id: 3,
      email: 'usercep@gmail.com',
      password: '86153613'
    },
    {
      id: 4,
      email: 'cesarsantanna.nahra@gmail.com',
      password: '45646961'
    },
])
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<><p>Pagina não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App