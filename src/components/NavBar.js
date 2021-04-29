import {Link} from "react-router-dom"
import './NavBar.css';

const NavBar = ({ input, setInput, setQuery }) => {

    const handleInput = (e) => {
        setInput(e.target.value);
        setQuery({ 'query': input })
    }

    const onKeyUp = (e) => {
        if (e.key === 'Escape') {
            setQuery({ content_type: 'kocktailBlog' })
            setInput('')
        }
    }

    return (
        <>
            <div className="SearchBar">
                <input type="text" onChange={handleInput} value={input} onKeyUp={onKeyUp} placeholder={'press esc to exit search'} /><br />
                I'm a searchbar! Believe me!
            </div>
            <div className="FilterButtons">
                <Link className="NavBarLink" to="/sour">Sour</Link>
                <Link className="NavBarLink" to="/fruity">Fruity</Link>
                <Link className="NavBarLink" to="/virgin">Virgin</Link>
            </div>
        </>
    )
    
}

export default NavBar

