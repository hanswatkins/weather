import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Results = ({ searchParams }) => {
  const requestedSearch = searchParams.get('query');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/current.json?key=6e847237301a49e6a60182831221210&q=${requestedSearch}}&aqi=no`;
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
      <div>
        <p>Showing results for '{requestedSearch}':</p>
        <h1>
          {results.data.location.name}, {results.data.location.region}
        </h1>
        <img src={results.data.current.condition.icon} alt='weather icon'></img>
        <p>Conditions: {results.data.current.condition.text}</p>
        <p>Temperature: {results.data.current.temp_f} F</p>
        <p>UV Index: {results.data.current.uv}</p>
        <p>
          Wind: {results.data.current.wind_mph} mph{' '}
          {results.data.current.wind_dir}
        </p>
      </div>
    </div>
  );
};

export default Results;
