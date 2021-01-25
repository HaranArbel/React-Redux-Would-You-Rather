import { useState, useEffect } from 'react'
import './App.css';
import { React } from 'react'
import handleInitialData from "../actions/shared";

function App() {

    useEffect(() => {
        handleInitialData()
    }, [])

    return (
        <div className="App">
           Hello
        </div>
    );
}

export default App;
