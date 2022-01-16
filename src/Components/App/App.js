import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Highlight from '../Highlight/Highlight';
import Roll from '../Roll/Roll';
import { Component } from 'react';
import { getAllWeapons } from '../../apiCalls';
import Footer from '../Footer/Footer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './App.css';
import WeaponsTable from '../WeaponsTable/WeaponsTable';

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
    this.setState({ chosenWeapon: null })
  }

  showFavorites = () => {
    let favoriteWeapons = this.state.weapons.filter(weapon => {
      return weapon.favorite;
    })
    this.setState({weapons: favoriteWeapons})
  }

  showSorting = () => {

  }

  clear = () => {
    this.componentDidMount();
  }

  render = () => {
    return (
      <main className='app'>
        <Header />
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
          <Route path='/roll' element={
            <div className='roll-page'>
              <Highlight />
              <Roll />
            </div>
          }
          />
        </Routes>
        <ButtonContainer showAll={this.showAll} showFavorites={this.showFavorites} showSorting={this.showSorting} clear={this.clear}/>
        <Footer />
      </main>
    )
  }       
};

export default App;
