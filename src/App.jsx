
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import Income from './Income'
import Expense from './Expense';



function App() {


  return (
 
            

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/income" element={<Income/>} />
      <Route path="/expense" element={<Expense/>} />

      </Routes>
    </BrowserRouter>
 
    
  )
}

export default App
