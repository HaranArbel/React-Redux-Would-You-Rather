import React from 'react'
import {Route} from 'react-router-dom';
import {useEffect} from 'react'
import {connect} from 'react-redux';
import Home from './Home';
import Login from './Login';
import handleInitialData from "../actions/shared";

function App({authedUser}) {

    useEffect(() => {
        handleInitialData()
    }, [])

    return (
        <div className="App">
            {authedUser !== null ?
                <Login/>
                // <div className="try">
                //     <Nav/>
                //     <div className="App-Content">
                //         <Route exact_path='/' component={Home}/>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //         <p className="App-Content-item">Hello</p>
                //     </div>
                // </div>
                :
                <Route exact_path='/' component={Home}/>
            }
        </div>
    );
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}
//
// function mapStateToProps({authedUser}) {
//     return {
//         authedUser
//     };
// }

export default connect(mapStateToProps, {handleInitialData})(App);
