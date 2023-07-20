import { Dispatch, SetStateAction, useEffect } from 'react'
import './style.scss'
import '../../../style/style.css';
import clsx from 'clsx'

type UsersProps = {
  activeUser: string
  setActiveUser : Dispatch<SetStateAction<string>>
}

export const Users = ({activeUser, setActiveUser} : UsersProps) => {

/*     const [activeUser, setActiveUser] = useState('user') */

    const checkUser = () => {
        clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'user',
             'navbar-button-modal-userType-container--black' : activeUser !== 'user',
             })
    }

    const checkContributor = () => {
        clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'contributor',
             'navbar-button-modal-userType-container--black' : activeUser !== 'contributor',
             })
    }

    const checkBrand = () => {
        clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'brand',
             'navbar-button-modal-userType-container--black' : activeUser !== 'brand',
             })
    }

    useEffect(() => {
        checkUser()
        checkContributor()
        checkBrand()
        console.log(activeUser)
    }, [activeUser])

    return (
      
        <div className="navbar-button-modal-userType">
            <div 
            className={clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'user',
              'navbar-button-modal-userType-container--black' : activeUser !== 'user' })} onClick={() => setActiveUser('user')}>
                <h5 
                className={clsx({'navbar-button-modal-userType-container__userType--blue' : activeUser === 'user',
                  'navbar-button-modal-userType-container__userType--black' : activeUser !== 'user' })}>Utente
                  </h5>
            </div>
            <div 
            className={clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'contributor',
              'navbar-button-modal-userType-container--black' : activeUser !== 'contributor',})} 
             onClick={() => setActiveUser('contributor')}>
                <h5 
                className={clsx({'navbar-button-modal-userType-container__userType--blue' : activeUser === 'contributor',
                  'navbar-button-modal-userType-container__userType--black' : activeUser !== 'contributor' })}>Contributor
                  </h5>
            </div>
            <div 
            className={clsx({'navbar-button-modal-userType-container--blue' : activeUser === 'brand',
              'navbar-button-modal-userType-container--black' : activeUser !== 'brand',})} 
            onClick={() => setActiveUser('brand')}>
                <h5 
                className={clsx({'navbar-button-modal-userType-container__userType--blue' : activeUser === 'brand',
                'navbar-button-modal-userType-container__userType--black' : activeUser !== 'brand' })}>Brand
                </h5>
            </div>
        </div>
    )
}