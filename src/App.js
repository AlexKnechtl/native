import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAUUwoO2CbCkq3ryGVawOFzWZQCRzNrODk",
            authDomain: "wko-lernplattform.firebaseapp.com",
            databaseURL: "https://wko-lernplattform.firebaseio.com",
            projectId: "wko-lernplattform",
            storageBucket: "wko-lernplattform.appspot.com",
            messagingSenderId: "214342629988"
          };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;