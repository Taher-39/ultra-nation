import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  const countryHandler = (clickedCountry) =>{
    const newCart = [...cart, clickedCountry]
    setCart(newCart);
  }
  return (
    <div className="App">
      <h3>Country Added: {countries.length}</h3>
      <div style={{height: '50px', width:'200px', border:'1px solid blue', marginLeft:'45%'}}>
        <h4>Country Loaded: {cart.length}</h4>
      </div>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country countryHandler={countryHandler} country={country}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
