import React, { Dispatch, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

type LocationContextProps = {
    locationPath?: string
    setLocationPath : Dispatch<React.SetStateAction<string>>
}

export const LocationContext = React.createContext<LocationContextProps>({
    locationPath: '',
    setLocationPath: () => undefined
})

type Props = {
    children: React.ReactNode
}

const LocationProvider = ({children} : Props) => {

    const location = useLocation()

    const [locationPath, setLocationPath] = useState('/')

    useEffect(() => {
        setLocationPath(location.pathname)
        console.log(location.pathname)
    }, [location])

    return (
        <LocationContext.Provider value={{locationPath, setLocationPath}}>
            {children}
        </LocationContext.Provider>
    )
}

const useLocationPath = () => {
    const context = React.useContext(LocationContext)
    if (context === undefined) {
        throw new Error('useModalSignup must be used within a ModalSignupProvider')
      }
      return context
}

export {LocationProvider, useLocationPath}
