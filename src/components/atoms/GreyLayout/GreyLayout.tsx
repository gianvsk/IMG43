import './style.css'
import { useEffect, useState } from 'react'
import { useLayout } from '../../../contexts/burgerMenuContext'

export const GreyLayout = () => {

    const {pushed} = useLayout()

    const [styleLayout, setStyleLayout] = useState('');

    useEffect(() => {
        pushed ? setStyleLayout('grey-layout') : setStyleLayout('grey-layout-invisible')
    }, [pushed])

    return (
        <div className={styleLayout}/>
    )
}