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
      chosenWeapon: {},
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

  setWeapon = (name) => {
    const clickedWeapon = this.state.weapons.find(weapon => name === weapon.name)
    this.setState({ chosenWeapon: clickedWeapon})
  }


  render = () => {
    return (
      <main className='App'>
        <Header />
        <Routes> 
          <Route path='/' element={
            <div className='weapons-page'>
              {this.state.chosenWeapon && <Highlight chosenWeapon={this.state.chosenWeapon}/>}
              <Inventory weapons={this.state.weapons} setWeapon={this.setWeapon}/>
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
