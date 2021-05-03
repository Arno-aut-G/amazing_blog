import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';



//import {    Card, CardImg, CardTitle, CardText,      CardBody, Container, Row, Col } from 'reactstrap';



const Card = ({ article }) => {
  console.log(article)
  const { title, image, descriptionShort, descriptionLong } = article.fields
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,

      //backgroundColor: 'gray',
      

    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      maxHeight: 800,
      
    },
    image: {
      width: 220,
      height: 300,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <>
    <Switch>
      
      <Route exact path={`/${title}`}>
        <div className={classes.root} display="flex" flexDirection="row">
          <br />
          <Paper className={classes.paper} elevation={6} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={image.fields.file.url} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom  variant="h5">
                      {title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {descriptionShort}
                    </Typography>
                    
                  </Grid>
                  
                  <Grid item style={{textAlign: 'left'}}>
                  <h4>Description</h4>
                    {descriptionLong}
                    <Link to={`/`}>
                      <Typography variant="body2" style={{ cursor: 'pointer' }} >
                        Show less
                      </Typography>
                    </Link>
                    
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          
          <br />
        </div>
      </Route>

      <Route path={`/`}>
        <div className={classes.root} display="flex" flexDirection="row">
          <br />
          <Paper className={classes.paper} elevation={6} >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={image.fields.file.url} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" >
                      {title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {descriptionShort}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to={`/${title}`}>
                      <Typography variant="body2" style={{ cursor: 'pointer' }} >
                      <Button variant="outlined" color="primary"> Show more </Button>
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          
          <br />
        </div>
      </Route>


    </Switch >
    </>
    
  );
}
export default Card;
