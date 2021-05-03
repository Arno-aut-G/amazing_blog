import { Switch, Route, useParams } from 'react-router-dom';
import PaginationRounded from './pagination';
import CocktailList from "./CocktailList"

const Main = ({ articles}) => {
    /* const displayCards = filterTag => {
        return (articles
            .filter(article => article.metadata.tags
                .map(tags => tags.sys.id)
                .includes(filterTag)).map(article =>
                    <Card article={article} />
                ))
    } */

    return (
        <>
            {articles ? (
                <Switch>
                    <Route path = "/:cName?">
                        <CocktailList articles={articles}/>
                    </Route>
                </Switch>
            ) : (<p>Loading....</p>)
            }
            <PaginationRounded />
        </>
    )
}
export default Main