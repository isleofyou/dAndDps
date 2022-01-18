import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Highlight from '../Highlight/Highlight';
import Roll from '../Roll/Roll';
import { Component } from 'react';
import { getAllWeapons } from '../../apiCalls';
import Footer from '../Footer/Footer';
import './App.css';
import WeaponsTable from '../WeaponsTable/WeaponsTable';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weapons: [],
      chosenWeapon: null,
      error: null
    };
  }

  componentDidMount = () => {
    const allWeapons = getAllWeapons();
    console.log(allWeapons)
    Promise.all([allWeapons])
      .then(data => {
        this.setState({ weapons: data[0].results, chosenWeapon: null });
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  setWeapon = (name) => {
    const clickedWeapon = this.state.weapons.find(weapon => name === weapon.name)
    this.setState({ chosenWeapon: clickedWeapon})
  }

  showAll = () => {
    
  }

  clear = () => {
    this.componentDidMount();
  }

  calculateDamage = () => {
    if(this.state.chosenWeapon.damage_dice === '0') {
      return 0
    }
    if(this.state.chosenWeapon.damage_dice === '1') {
      return 1
    }
    let splitDamage = this.state.chosenWeapon.damage_dice.split('d');
    let times = parseInt(splitDamage[0]);
    let damageMax = parseInt(splitDamage[1]);
    let max = (times * damageMax);
    let result = Math.floor(Math.random() * (max) + 1);
      return result;
  }
  
  render = () => {

    return (
      <main className='app'>
        <Header showAll={this.showAll} clear={this.clear} chosenWeapon={this.state.chosenWeapon}/>
        <Routes> 
          <Route path='/' element={
            <div className='weapons-page'>
              {this.state.chosenWeapon && <Highlight chosenWeapon={this.state.chosenWeapon}/>}
              <div className='table'>
                <WeaponsTable weapons={this.state.weapons} setWeapon={this.setWeapon}/>
              </div>
            </div>
          }
          />
          <Route path='/roll' element={!this.state.chosenWeapon ? <Navigate to='/' /> :
            <div className='roll-page'>
              {this.state.chosenWeapon && <Highlight chosenWeapon={this.state.chosenWeapon}/>}
              <Roll calculateDamage={this.calculateDamage}/>
            </div>
          }
          />
        </Routes>
        <Footer />
      </main>
    )
  }       
};

App.propTypes = {
  weapons: PropTypes.object,
  
};

export default App; 
