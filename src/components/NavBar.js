

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
        <div className="MyComponent">
            <input type="text" onChange={handleInput} value={input} onKeyUp={onKeyUp} placeholder={'press esc to exit search'} /><br />
            I'm a searchbar! Believe me!
        </div>);
}

export default NavBar

