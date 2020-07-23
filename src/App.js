import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/card';
import Grid from '@material-ui/core/Grid';
import CardDetail from './Containers/CardDetails/cardDetail'

const cardDetails = [
  {
    name: "Beerbal",
    age: 20,
    missingDate: "12-06-2020",
    contactNumber: 1234567890
  },
  {
    name: "Beerbal",
    age: 20,
    missingDate: "12-06-2020",
    contactNumber: 1234567890
  },
  {
    name: "Beerbal",
    age: 20,
    missingDate: "12-06-2020",
    contactNumber: 1234567890
  },
  {
    name: "Beerbal",
    age: 20,
    missingDate: "12-06-2020",
    contactNumber: 1234567890
  }
]

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        {
          cardDetails.map((val, i) => {
            return(
            <Grid item lg={3} xl={3} md={6} sm={6} xs={12}>
              <Card name={val.name}/>
            </Grid>
            )
          })
        }
      </Grid>
      {/* <CardDetail/> */}
    </div>
  );
}

export default App;
