// import logo from './logo.svg';
import './App.css';
// import {CounterClass, CounterFunction} from "./Counter";
import {CocktailCarousel, CocktailCustom} from "./components/Cocktail"
import React from "react";
import {Header, Sidebar} from "./layout/Page"
// import Header from "./layout/Header/Header"
import {Container} from "@material-ui/core"

// const fruits = ['apple', 'banana', 'orange']



// BEGIN API JUNK

// https://github.com/swagger-api/swagger-codegen/issues/10451



var JamaicaApi = require('jamaica_api');

var api = new JamaicaApi.V1authApi()
// api.basePath = 'http://localhost:8080/api'
api.getAuthInfoEndpoint().then(function() {
    console.log('API called successfully.');
}, function(error) {
    console.error(error);
});

const cocktailsApi = new JamaicaApi.V1cocktailsApi()
cocktailsApi.getCocktailsEndpoint().then(function(data) {
    console.log(data)
})


// console.log(api.V1listsApi())






// END API JUNK






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

            {/*<CocktailCarousel cocktail_slug={'old-fashioned'}/>*/}
            {/*<CocktailCustom cocktail_slug={'martinez'} spec_slug={'rail-stop'}/>*/}
            {/*<Header />*/}
            <Sidebar />
        </div>
    )
}

export default App;
