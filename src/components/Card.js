import React from 'react';
import ReadMore from './ReadeMore'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Switch, Route} from 'react-router-dom';

//import {    Card, CardImg, CardTitle, CardText,      CardBody, Container, Row, Col } from 'reactstrap';
     


const Cards = ({article}) => {
    console.log(article)
    const {title, image, descriptionShort} = article.fields
 /**   
  return (
      <>
    {/**<div className="MyComponent">
    <p>{article.fields.title}</p>
    </div>
    {article.map((e) => (*
    <div class="grid-container">
    <Container >
    <Row className="justify-content-center" xs= {12} sm={6} md={3} >
    <Col 
      style={{ margin: "0 5px 10px 0",
      border: "1px solid black", borderRadius: "10px" }}>  
      <Card>
        <CardImg top width="50%" height="50%" src={image.fields.file.url} alt="img" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>          
          <CardText>{descriptionShort}</CardText>          
        </CardBody>
      </Card>
    </Col>
    </Row>
    </Container>
    </div>
    {/*))}
   </>
    )
  }*/

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      backgroundColor: 'gray',
      
      
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      maxHeight: 800,
      backgroundColor: '#dcedc8',
     
    },
    image: {
      width: 180,
      height: 200,
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
      <div className={classes.root} display="flex" flexDirection="row">
      <br/>
        <Paper className={classes.paper}  elevation={6} >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image.fields.file.url} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  {title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  {descriptionShort}
                  </Typography>                  
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }} >
                    Read more 
                   <Switch>
                    <Route exact path="/">
                    <ReadMore />
                    </Route>
                    </Switch>
          
                  </Typography>
                </Grid>
              </Grid>              
            </Grid>
          </Grid>
        </Paper>
        <br/>
      </div>
    );
  }
export default Cards;