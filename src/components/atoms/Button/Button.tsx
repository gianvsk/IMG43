import './style.css'
import { useModalSignup } from '../../../contexts/signUp.context';
import clsx from 'clsx';

type ButtonType = {
    size: 'small' | 'medium' | 'large';
    title: string,
    search?: string
}

export const Button = ({ size, title, search }: ButtonType) => {

    const { visible, setVisible } = useModalSignup()

    const openModal = () => {
        !visible ? setVisible(true) : setVisible(false)
        console.log(visible)
    }

    const sendData = () => {
        console.log(search)
    }

    return (
        <div>
            {!search &&
                <button className={clsx({ 'navbar-button': size === 'medium' },
                    { 'searchbar-button': size === 'small' },
                    { 'signup-button': size === 'large' })}
                    onClick={openModal}>
                    {title}
                </button>
            }
            {search &&
                <button className={clsx({ 'navbar-button': size === 'medium' },
                    { 'searchbar-button': size === 'small' },
                    { 'signup-button': size === 'large' })}
                    onClick={sendData}>
                    {title}
                </button>
            }

        </div>
    )
}