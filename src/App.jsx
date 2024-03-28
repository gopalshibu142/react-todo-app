import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AddToDoPage from './pages/AddToDoPage'
import UpdateToDo from './components/UpdateToDo'
import DeleteToDo from './components/DeleteToDo'

function App() {

  return (
    <Routes>
      <Route exact path='/' Component={RegisterPage}/>
      <Route exact path='/login' Component={LoginPage}/>
      <Route exact path='/dashboard' Component={DashboardPage}/>
      <Route exact path='/todo' Component={AddToDoPage}/>
      <Route path='/edittodo/:id' Component={UpdateToDo}/>
      <Route path='/delete/:id' Component={DeleteToDo}/>
    </Routes>
  )
}

export default App
