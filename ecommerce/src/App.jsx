import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<ItemListContainer msg="Welcome to the book shop"/>}></Route>
            <Route path='/category/:genre' element={<ItemListContainer msg="List of Products by Genre"/>}></Route>
            <Route path='/products/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
