import { Card, Grid, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    minHeight: 500,
    minWidth: 300,
    margin: "5rem",

  },
  media: {
    height: 350,
  },
});

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

  const handleNav = (destination) => {
    setQuery({ 'query': destination})
  }

  const classes = useStyles();

  return (
    <>
      <div className="SearchBar">
        <input type="text" onChange={handleInput} value={input} onKeyUp={onKeyUp} placeholder={'press esc to exit search'} /><br />
                I'm a searchbar! Believe me!
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" text-align="center">
          Cocktails
            </Typography>
      </CardContent>
      <Grid container spacing={2} className={classes.gridContainer} >

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} style={{ marginTop: '30px', cursor: "pointer"}} onClick={()=> handleNav("sour")}>
            <CardMedia
              className={classes.media}
              image='https://cdn.pixabay.com/photo/2016/11/19/13/53/margarita-1839361_960_720.jpg'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" text-align="center">
                Sour
                </Typography>
              <Typography gutterBottom variant="h6" text-align="center">
                Cocktails
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                More Recipes
                </Typography>
            </CardContent>
          </Card>

        </Grid>



        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} style={{ marginTop: '30px', cursor: "pointer"}} onClick={()=> handleNav("fruity")}>
            <CardMedia
              className={classes.media}
              image='https://cdn.pixabay.com/photo/2018/05/17/15/33/cocktail-3408834_960_720.jpg'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" text-align="center">
                Fruity
                </Typography>
              <Typography gutterBottom variant="h6" text-align="center">
                Cocktails
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                More Recipes
                </Typography>
            </CardContent>
          </Card>

        </Grid>


        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} style={{ marginTop: '30px', cursor: "pointer"}} onClick={()=> handleNav("virgin")}>

            <CardMedia
              className={classes.media}
              image='https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242_960_720.jpg'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" text-align="center">
                Virgin
                </Typography>
              <Typography gutterBottom variant="h6" text-align="center">
                Cocktails
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                More Recipes
                </Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
      <div className="All">
        <Link to="/" onClick={()=>handleNav("")}>All</Link>
      </div>
    </>
  );
};

export default NavBar

