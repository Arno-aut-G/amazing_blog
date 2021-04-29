import Card from "./Card"
import {Switch, Route} from 'react-router-dom';

const Main = ({articles}) => {
    
    let map = articles.filter(article => article.metadata.tags.map(tags => tags.sys.id).includes("sour"))
    console.log(map)/* let numArr = [1,2,3,4,5];
     let numtimes3 = numArr.map(num => {
        console.log(num*2);
        return (num*3);
    })
    console.log(numtimes3) */

    /* const displayCards = (array) =>{
        array.map(article => 
            <Card article={article}/>
            )
    } */

    /* console.log(displayCards(articles)) */

    return (
        <>
            {articles ? (
            <Switch>
                {/* <Route path="/sweet">
                    <section className="ArticleSection">
                        { articles.map(article => 
                            <Card article={article}/>
                            )
                        }
                    </section>
                </Route> */}
                <Route path="/sour">
                    <section className="ArticleSection">
                        { articles
                            .filter(article => article.metadata.tags
                            .map(tags => tags.sys.id)
                            .includes("sour")).map(article => 
                            <Card article={article}/>
                            )
                        }
                    </section>
                </Route>
                <Route path="/fruity">
                    <section className="ArticleSection">
                        { articles
                            .filter(article => article.metadata.tags
                            .map(tags => tags.sys.id)
                            .includes("fruity")).map(article => 
                            <Card article={article}/>
                            )
                        }
                    </section>
                </Route>
                <Route path="/non-alcoholic">
                    <section className="ArticleSection">
                        { articles
                            .filter(article => article.metadata.tags
                            .map(tags => tags.sys.id)
                            .includes("non-alcoholic")).map(article => 
                            <Card article={article}/>
                            )
                        }
                    </section>
                </Route>
                <Route path="/">
                    <section className="ArticleSection">
                        { articles.map(article => 
                            <Card article={article}/>
                            )
                        }
                    </section>
                </Route>
            </Switch>
            ) : (<p>Loading....</p>)
            }
        </>
    )
}
// .filter(article => article.fields.tags.split.includes("sour"))
//.filter(article => article.fields.tags.includes("non-alcoholic"))
//{displayCards(articles)}
export default Main