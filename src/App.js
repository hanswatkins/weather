import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Search from './Search';
import Results from './Results.js';
import { useSearchParams } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='App'>
      <header>
        <Typography
          variant='h3'
          className='title'
          sx={{ padding: 5 }}
          
        >
          <Link to='/'>
            <b>What's The Weather?</b> &#x2601;
          </Link>
        </Typography>
      </header>
      <Routes>
        <Route
          path='/'
          element={<Search setSearchParams={setSearchParams} />}
        />
        <Route
          path='/results'
          element={<Results searchParams={searchParams} />}
        />
      </Routes>
    </div>
  );
}

export default App;
