import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Search = (props) => {
  const [searchString, setSearchString] = useState('');
  let setSearchParams = () => {};

  let navigate = useNavigate();

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(searchString);
    navigate(`/results?query=${searchString}`);
  }
  return (
    <div className='weather-search'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        marginTop={10}
      >
        <Card sx={{ maxWidth: 300, minWidth: 300, backgroundColor: '#eceff1' }}>
          <CardContent>
            <Typography
              variant='body1'
              style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}
            >
              Search for a City or Postal Code:
            </Typography>

            <form autoComplete='off' onSubmit={handleSubmit}>
              <Textfield
                id='outlined-name'
                label='City'
                onChange={handleChange}
              />
              <p></p>
              <Button
                variant='contained'
                type='submit'
                size='large'
                disableElevation
              >
                Search
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Search;
