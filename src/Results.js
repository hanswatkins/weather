import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Results = ({ searchParams }) => {
  const requestedSearch = searchParams.get('query');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=6e847237301a49e6a60182831221210&q=${requestedSearch}}&aqi=no`;
    axios
      .get(url)
      .then(function (results) {
        setResults(results);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  if (!requestedSearch) {
    return (
      <div>
        Oops, you must enter a search query! Click <Link to='/'>here</Link> to
        go back.
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          No results found for {requestedSearch}. Click <Link to='/'>here</Link>{' '}
          to go back and try another search.
        </p>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  return (
    <div className='results-body'>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        marginTop={5}
      >
        <Card
          className='card'
          sx={{
            maxWidth: 450,
            minWidth: 275,
            backgroundColor: '#eceff1',
            padding: 2,
          }}
        >
          <CardContent>
            <div>
              <p>Showing results for '{requestedSearch}':</p>
              <Typography variant='h4'>
                {results.data.location.name}, {results.data.location.region}
              </Typography>
              <img
                src={results.data.current.condition.icon}
                alt='weather icon'
              ></img>
              <Typography variant='body1'>
                <b>{results.data.current.condition.text}</b>
              </Typography>
              <Typography variant='body1'>
                Temperature: {results.data.current.temp_f} &deg;F
              </Typography>
              <Typography variant='body1'>
                UV Index: {results.data.current.uv}
              </Typography>
              <Typography variant='body1'>
                Wind: {results.data.current.wind_mph} mph{' '}
                {results.data.current.wind_dir}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Results;
