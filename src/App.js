import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Search from './Search';
import Results from './Results.js';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='App'>
      <header>
        <h1>
          <Link to='/'>What's The Weather?</Link>
        </h1>
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
