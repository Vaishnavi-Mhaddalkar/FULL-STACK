import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmpComponent from './components/ListEmpComponent'
import EmployeeComponent from './components/EmployeeComponent'



function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* / http://localhost:3000*/}
      <Route path='/' element = { <ListEmpComponent />}/>
     {/* / http://localhost:3000/employees*/}
      <Route path='/employees' element = { <ListEmpComponent />}/>
      {/* / http://localhost:3000/add-employee*/}
      <Route path='/add-employee' element={<EmployeeComponent/>}/>
      {/* / http://localhost:3000/edit-employee/1*/}
      <Route path='edit-employee/:id' element={<EmployeeComponent/>}/>

    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
