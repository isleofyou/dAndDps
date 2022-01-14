import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Header from '../Header/Header';
import Highlight from '../Highlight/Highlight';
import Inventory from '../Inventory/Inventory';
import Roll from '../Roll/Roll';

function App() {
  return (
    <>
      <main className='App'>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className='weapons-page'>
            <Highlight />
            <Inventory />
          </div>
        }
        />
        <Route path='/roll' element={
          <div className='roll-page'>
            <Highlight />
            <Roll />
          </div>
        }
        />
      </Routes>
      <Footer />
      </main>
    </>
  );
}

export default App;
