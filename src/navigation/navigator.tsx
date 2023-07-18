import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from "../pages/Homepage/Homepage";
import { Navbar } from '../components/organisms/navbar/navbar';
import { ModalSignupProvider } from '../contexts/signUp.context';
import { LayoutProvider } from '../contexts/burgerMenuContext';

export const Navigator = () => {

    return (
        <ModalSignupProvider>
            <LayoutProvider>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path='/*' element={<Homepage />} />
                    </Routes>
                </BrowserRouter>
            </LayoutProvider>
        </ModalSignupProvider>
    )
}