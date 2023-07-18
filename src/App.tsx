import './App.css'
import 'sanitize.css'
import { ContainerComponents } from './components/organisms/container-components/contaniner-components'
import { ModalSignupProvider } from './contexts/signUp.context'
import { LayoutProvider } from './contexts/burgerMenuContext'

function App() {

  return (
    <ModalSignupProvider>
      <LayoutProvider>
        <ContainerComponents />
      </LayoutProvider>
    </ModalSignupProvider>
  )
}

export default App
