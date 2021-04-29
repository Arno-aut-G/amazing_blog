


const Main = ({ articles }) => {
    let drinks = [...articles.items]

    return (
        <div className="MyComponent">
            {drinks.map((e) => <h3>{e.fields.title}</h3>)}
        </div>
    );
}

export default Main