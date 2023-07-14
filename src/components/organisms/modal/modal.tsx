import { Icon1 } from '../../atoms/Icon1/Icon1';
import { NavbarButtonModalMainContent } from '../../molecoles/modal-body/navbar-button-modal-main-content';
import { Title } from '../../atoms/Title/Title';
import { Users } from '../../atoms/Users/Users';
import clsx from 'clsx';
import './style.css'
import { useModalSignup } from '../../../contexts/signUp.context';

type Props = {
    open: boolean
}

export const Modal = ({ open }: Props) => {

    const {setVisible} = useModalSignup()

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div className={clsx('navbar-button-modal', { 'navbar-button-modal--open': open })} onClick={closeModal} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <Icon1/>
                <Title/>
                <Users/>
                <NavbarButtonModalMainContent/>
            </div>
        </div>
    )
}