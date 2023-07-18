
import { useState } from "react"
import { Button } from "../../atoms/Button/Button"
import { Searchbar } from "../../atoms/Searchbar/searchbar"
import './style.css'
import '../../../style/style.css';
import clsx from "clsx";

type MainSearchbarProps = {
    size?: 'big'
}

export const MainSearchbar = ({size} : MainSearchbarProps) => {

    const [search, setSearch] = useState(' ')

    return (
        <div className={clsx("hero-container-searchbar", {'hero-container-searchbar--adapted-to-nav': size})} >
            <Searchbar setSearch={setSearch}/>
            <div className="hero-container-searchbar__button-container">
                <Button type='submit' size={'small'} title='Search' search={search}/>
            </div>
        </div>
    )
}