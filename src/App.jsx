import './App.css'

import Haqqında from './Haqqında/Haqqında'
import Əlaqə from './Əlaqə/Əlaqə'
import Is from './İş nümunələri/İşNümunələri'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Haqqında />} />
        <Route path='/əlaqə' element={ <Əlaqə />} />
        <Route path='/is' element={ <Is />} />
      </Routes>
      </>
  )
}

export default App
