import Card from "./Card"
import { Switch, Route } from 'react-router-dom';
import Example from './imgSlider';

const Main = ({ articles }) => {

    const displayCards = filterTag => {
        return (articles
            .filter(article => article.metadata.tags
                .map(tags => tags.sys.id)
                .includes(filterTag)).map(article =>
                    <Card article={article} />
                ))
    }

    /* console.log(displayCards(articles)) */

    return (
        <>
            {articles ? (
                <Switch>
                    <Route path="/sour">
                        <section className="ArticleSection">
                            {displayCards("sour")}
                        </section>
                    </Route>
                    <Route path="/fruity">
                        <section className="ArticleSection">
                            {displayCards("fruity")}
                        </section>
                    </Route>
                    <Route path="/virgin">
                        <section className="ArticleSection">
                            {displayCards("virgin")}
                        </section>
                    </Route>
                    <Route path="/">
                        <section className="ArticleSection">
                            {articles.map(article =>
                                <Card article={article} />)}
                        </section>
                    </Route>
                </Switch>
            ) : (<p>Loading....</p>)
            }
            <Example />
        </>
    )
}
export default Main