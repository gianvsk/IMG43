import React, { useState } from 'react'
import { Modal } from '../components/organisms/Modal/Modal'

type Context = {
  setVisible: (visible: boolean) => void
  visible?: boolean
}

export const ModalSignUpContext = React.createContext<Context>({
  setVisible: () => null,
  visible: undefined,
})

type Props = {
  children: React.ReactNode
}

function ModalSignupProvider({ children }: Props) {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <ModalSignUpContext.Provider value={{ visible, setVisible }}>
      {children}
      <Modal open={visible} />
    </ModalSignUpContext.Provider>
  )
}

const useModalSignup = () => {
  const context = React.useContext(ModalSignUpContext)
  if (context === undefined) {
    throw new Error('useModalSignup must be used within a ModalSignupProvider')
  }
  return context
}

export { ModalSignupProvider, useModalSignup }