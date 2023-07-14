
import { useState } from "react"
import { Button } from "../../atoms/Button/Button"
import { Searchbar } from "../../atoms/Searchbar/searchbar"
import './style.css'


export const HeroContainerSearchbar = () => {

    const [search, setSearch] = useState(' ')

    return (
        <div className="hero-container-searchbar">
            <Searchbar setSearch={setSearch} />
            <div className="hero-container-searchbar__button-container">
                <Button size={'small'} title='Search' search={search}/>
            </div>
        </div>
    )
}