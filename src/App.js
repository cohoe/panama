// import logo from './logo.svg';
import './App.css';
// import {CounterClass, CounterFunction} from "./Counter";
// import {CocktailCarousel, CocktailCustom} from "./components/Cocktail"
import React from "react";
// import {Header, Sidebar} from "./layout/Page"
// import {Header,ContentPane} from "./components/Page"
// import {Container} from "@material-ui/core"

// const fruits = ['apple', 'banana', 'orange']



// BEGIN API JUNK

// https://github.com/swagger-api/swagger-codegen/issues/10451



// var JamaicaApi = require('jamaica_api');
//
// var api = new JamaicaApi.V1authApi()
// // api.basePath = 'http://localhost:8080/api'
// api.getAuthInfoEndpoint().then(function() {
//     console.log('API called successfully.');
// }, function(error) {
//     console.error(error);
// });
//
// const cocktailsApi = new JamaicaApi.V1cocktailsApi()
// cocktailsApi.getCocktailsEndpoint().then(function(data) {
//     console.log(data)
// })


// console.log(api.V1listsApi())






// END API JUNK


import MainLayout from "./components/Page/MainLayout"
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'


const theme = createTheme();

// const theme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

function App({name = 'Foo'}) {
    // return (
    //     <MainLayout />
    // )
    return <ThemeProvider theme={theme}><MainLayout/></ThemeProvider>;
}

export default App;
