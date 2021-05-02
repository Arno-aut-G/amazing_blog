import { Card, Grid, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
/*import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row,
} from 'reactstrap';**/

    const useStyles = makeStyles({
        root: {
          maxHeight: 500,
          maxWidth: 300,
          margin: "5rem", 
      
        },
        media: {
          height: 150,
        },
      });
      
      export default function Info() {
        const classes = useStyles();
      
        return (
            <>
            <CardContent>
            <Typography gutterBottom variant="h5" text-align="center">
            Welcome to the Group Five
            </Typography>
          </CardContent>
           <Grid container spacing={2} className={classes.gridContainer} >
           <Grid item xs={8} sm={6} md={4}>
          <Card className={classes.root} style={{marginTop: '30px'}}>
              <CardMedia
                className={classes.media}
                image='https://cdn.pixabay.com/photo/2016/11/19/13/53/margarita-1839361_960_720.jpg'              
              />
              <CardContent>
                <Typography gutterBottom variant="h5" text-align="center">
                Sour
                </Typography>
                <Typography gutterBottom variant="h6" text-align="center">
                 Kocktails
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                More Recipis
                </Typography>
              </CardContent>
          </Card>
          </Grid>
      
          <Grid item xs={12} sm={6} md={4} className="aboutProfile">
          <Card className={classes.root} style={{marginTop: '30px'}}>
              <CardMedia
                className={classes.media}
                image='https://cdn.pixabay.com/photo/2018/05/17/15/33/cocktail-3408834_960_720.jpg'               
              />
              <CardContent>
                <Typography gutterBottom variant="h5" text-align="center">
                Fruity
                </Typography>
                <Typography gutterBottom variant="h6" text-align="center">
                 Kocktails
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                More Recipes
                </Typography>
              </CardContent>
          </Card>
          </Grid>
      <Grid item xs={12} sm={6} md={4} className="aboutProfile">
          <Card className={classes.root} style={{marginTop: '30px'}} >
              <CardMedia
                className={classes.media}
                image='https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242_960_720.jpg'                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" text-align="center">
                Virgin
                </Typography>
                <Typography gutterBottom variant="h6" text-align="center">
                 Kocktails
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" text-align="center">
                  More Recipes
                </Typography>
              </CardContent>
          </Card>
          </Grid>
          </Grid>
          </>
  );
};

