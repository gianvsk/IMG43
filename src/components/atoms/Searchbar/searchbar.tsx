import './style.css'
import '../../../style/style.css';

type SearchbarProps = {
    setSearch : React.Dispatch<React.SetStateAction<string>>
}

export const Searchbar = ({setSearch}: SearchbarProps) => {
    
    return (
        <div className="hero-container-searchbar-input">
            <input className="hero-container-searchbar-input__input--large" onChange={e => setSearch(e.target.value)} placeholder="Search for licensed high-res photos"/>
            <input className="hero-container-searchbar-input__input--small" onChange={e => setSearch(e.target.value)} placeholder="Search photos"/>
            </div>
    )
}