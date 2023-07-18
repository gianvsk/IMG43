import React, { useState } from 'react'

type Context = {
  setPushed: (push: boolean) => void
  pushed?: boolean
}

export const LayoutContext = React.createContext<Context>({
  setPushed: () => null,
  pushed: undefined,
})

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  const [pushed, setPushed] = useState<boolean>(false)

  return (
    <LayoutContext.Provider value={{ pushed, setPushed }}>
      {children}
    </LayoutContext.Provider>
  )
}

const useLayout = () => {
  const context = React.useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useModalSignup must be used within a ModalSignupProvider')
  }
  return context
}

export { LayoutProvider, useLayout }