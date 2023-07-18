import { Icon1 } from '../../atoms/Icon1/Icon1';
import { Title } from '../../atoms/Title/Title';
import { Users } from '../../atoms/Users/Users';
import clsx from 'clsx';
import './style.css'
import { useModalSignup } from '../../../contexts/signUp.context';
import { CompletedForm } from '../../form/completedForm';

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
                <CompletedForm closeModal={closeModal}/>
            </div>
        </div>
    )
}