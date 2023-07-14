import './style.css'

type props = {
    setSearch : React.Dispatch<React.SetStateAction<string>>
}

export const Searchbar = ({setSearch}: props) => {
    
    return (
        <div className="hero-container-searchbar-input">
            <input className="hero-container-searchbar-input__input" onChange={e => setSearch(e.target.value)} placeholder="Search for licensed high-res photos"/>
            </div>
    )
}