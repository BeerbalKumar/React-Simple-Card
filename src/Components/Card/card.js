import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    width : 300,
    margin : "auto",
    marginTop:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardText:{
    fontWeight  : 700,
    fontSize : 18,
    lineHeight : 0.5,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  spanText:{
      fontWeight:"normal"
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root} variant="outlined">
    <div style={{padding : 10,textAlign:"center"}}>
        <img src='data:image/jpeg;base64,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' style={{
            border : '1px solid black',
            borderRadius : '50%',
            width : 150
        }}/>
        <div>
    <p className={classes.cardText}>Name:<span className={classes.spanText}>{props.name}</span></p>
    <p className={classes.cardText}>Age :<span className={classes.spanText}> 20</span></p>
    <p className={classes.cardText}>Missing Date :<span className={classes.spanText}> 20-05-2020</span></p>
    <p className={classes.cardText}>Contact No :<span className={classes.spanText}> 876876876</span></p>
    <Button style={{backgroundColor : 'darkcyan',color : 'white'}}>See More</Button>
    </div>
    </div>
    </Card>

  );
}