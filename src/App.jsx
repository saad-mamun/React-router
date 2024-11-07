import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { SignUp } from './Components/Signup'
import { Navbar } from './Components/Navbar'
import Error from './Components/Error'
function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/About' element={ <About/> } />
        <Route path='/Contact' element={ <Contact/> } />
        <Route path='/SignUp' element={ <SignUp/> } />
        <Route path='*' element={ <Error/> } />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
