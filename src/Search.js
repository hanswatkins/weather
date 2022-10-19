import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

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
      <h2>Search for a City</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='searchString'>Search: </label>
        <input
          type='text'
          id='searchString'
          name='searchString'
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
