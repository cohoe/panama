import logo from './logo.svg';
import './App.css';
import {CounterClass, CounterFunction} from "./Counter";
import React from "react";

const fruits = ['apple', 'banana', 'orange']

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

            {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
            <CounterClass count={69}>CHILD</CounterClass>
            <CounterFunction count={69}>ChIlD?</CounterFunction>
        </div>
    );
}

export default App;
