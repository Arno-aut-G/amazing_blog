import Cards from "./Card"
import {Switch, Route} from 'react-router-dom';

const Main = ({articles}) => {
    /* let numArr = [1,2,3,4,5];
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
        <Switch>
            <Route path="/sweet">
                <section className="ArticleSection">
                    { articles.map(article => 
                        <Cards article={article}/>
                        )
                    }
                </section>
            </Route>
            <Route path="/sour">
                <section className="ArticleSection">
                    { articles.map(article => 
                        <Cards article={article}/>
                        )
                    }
                </section>
            </Route>
            <Route path="/fruity">
                <section className="ArticleSection">
                    { articles.map(article => 
                        <Cards article={article}/>
                        )
                    }
                </section>
            </Route>
            <Route path="/non-alcoholic">
                <section className="ArticleSection">
                    { articles.map(article => 
                        <Cards article={article}/>
                        )
                    }
                </section>
            </Route>
            <Route path="/">
                <section className="ArticleSection">
                    { articles.map(article => 
                        <Cards article={article}/>
                        )
                    }
                </section>
            </Route>
            
        </Switch>
    )
}

//.filter(article => article.fields.tags.includes("non-alcoholic"))
//{displayCards(articles)}
export default Main