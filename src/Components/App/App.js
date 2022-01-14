import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Highlight from '../Highlight/Highlight';
import Inventory from '../Inventory/Inventory';
import Roll from '../Roll/Roll';
import { Component } from 'react';
import { getAllWeapons } from '../../apiCalls';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weapons: [],
      error: null
    };
  }

  componentDidMount = () => {
    const allWeapons = getAllWeapons();
    Promise.all([allWeapons])
      .then(data => {
        this.setState({ weapons: data[0].results });
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }


  render = () => {
    return (
      <main className='App'>
        <Header />
        <Routes>
          <Route path='/' element={
            <div className='weapons-page'>
              <Highlight />
              <Inventory weapons={this.state.weapons}/>
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
    )
  }       
};

export default App;
