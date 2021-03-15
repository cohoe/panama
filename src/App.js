// import logo from './logo.svg';
import './App.css';
// import {CounterClass, CounterFunction} from "./Counter";
import {CocktailCarousel, CocktailCustom} from "./components/Cocktail"
import React from "react";

// const fruits = ['apple', 'banana', 'orange']

function App({name = 'Foo'}) {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <p>*/}
            {/*    Hello {name}*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}

            {/*{fruits.map(fruit => <li key={fruit}>{fruit}</li>)}*/}
            {/*<CounterClass count={69}>CHILD</CounterClass>*/}
            {/*<CounterFunction count={69}>ChIlD?</CounterFunction>*/}
            <CocktailCarousel cocktail_slug={'old-fashioned'}/>
            <CocktailCustom cocktail_slug={'martinez'} spec_slug={'rail-stop'}/>
            {/*<Cocktail cocktail_slug={'martinez'} spec_slug={'rail-stop'}/>*/}
        </div>
    );
}

export default App;
