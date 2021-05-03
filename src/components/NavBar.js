import { Card, Grid, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { green } from '@material-ui/core/colors';
import Example from './imgSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 370,
    width: 300,
    margin: "5rem",
    

  },
  Button: {
    alignItems: 'center',
  },
  media: {
    height: 250,
  },
  h5:{
    color:'white'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#43a047',
    '&:hover': {
      backgroundColor: '#ccff90',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(120),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(5, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
    <AppBar position="static" color="#c5e1a5">       
    <Tabs  onChange={handleNav} aria-label="simple tabs example"  style={{ color: green[600], fontSize: 10 }}>
            
    <LocalBarIcon style={{ color: green[500], fontSize: 40, hover:'50px' }}/>
    <Tab label="Home" onClick={()=>handleNav("")}  />
    <Tab label="Sour" onClick={()=> handleNav("sour")} />
    <Tab label="Fruity" onClick={()=> handleNav("fruity")} />
    <Tab label="Virgin" onClick={()=> handleNav("virgin")}/>
    <div className={classes.search}>
    
              <SearchIcon />
              
            <InputBase type="text" onChange={handleInput} value={input} onKeyUp={onKeyUp} placeholder={'press esc to exit search'} />
          </div>
      
    </Tabs>
    
      </AppBar>
      </div>
      <Example />
      <CardContent>
       
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
      <Typography gutterBottom variant="h6" text-align="center">
      <Button variant="outlined" color="primary" alignItems="center">
        <Link to="/" onClick={()=>handleNav("")}  >All Amazing Kocktail Recipes</Link>
      </Button>
      </Typography>
      </div>
    </>
  );
};

export default NavBar

