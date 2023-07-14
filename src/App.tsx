import './App.css'
import 'sanitize.css'
import { ContainerComponents } from './components/organisms/container-components/contaniner-components'
import {ModalSignupProvider } from './contexts/signUp.context'

function App() {

  return (
    <ModalSignupProvider>
      <ContainerComponents/>
    </ModalSignupProvider>
  )
}

export default App
