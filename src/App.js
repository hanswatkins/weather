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
        <Typography variant='h2' className='title'>
          <Link to='/'>&#x2601; What's The Weather? &#x2600;</Link>
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
