import Card from "./Card"
import { useParams } from "react-router-dom"

const CocktailList = ({ articles }) => {
    let { cName } = useParams();

    return (
        <>
            {!cName ?
                articles.map(article => <Card article={article} />)
                : articles.filter(article => cName === article.fields.title).map(article => <Card article={article} />)
            }
        </>
    )
}

export default CocktailList


