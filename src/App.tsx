import './App.css'
import 'sanitize.css'
import { Homepage } from './pages/Homepage/Homepage'
import { ModalSignupProvider } from './contexts/signUp.context'
import { LayoutProvider } from './contexts/burgerMenuContext'
import { Navbar } from './components/organisms/navbar/navbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Footer } from './components/organisms/footer/footer'
import { LocationProvider } from './contexts/locationContext'
import { Explore } from './pages/Explore/Explore'

function App() {

  return (

    <ModalSignupProvider>
      <LayoutProvider>
        <BrowserRouter>
          <LocationProvider>
            <Routes>
              <Route path='/' element={<><Navbar /><Outlet /><Footer /></>}>
                <Route path='/' element={<Homepage />} />
                <Route path='/explore' element={<Explore />} />
              </Route>
            </Routes>
          </LocationProvider>
        </BrowserRouter>
      </LayoutProvider>
    </ModalSignupProvider>
  )
}

export default App
