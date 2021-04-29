


const Main = ({ articles }) => {
    let drinks = [...articles]

    return (
        <div className="MyComponent">
            {drinks.map((e, index) => <h3 key={index}>{e.fields.title}</h3>)}
        </div>
    );
}

export default Main