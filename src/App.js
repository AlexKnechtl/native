import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
// import { Actions } from 'react-native-router-flux';
import {createRootNavigator} from './BetterRouter';
import { signInWithoutPasswordAction, configureStore } from 'core/lib';
import { Actions } from 'react-native-router-flux';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase initalization in configure store
        // var config = {
        //     apiKey: "AIzaSyAUUwoO2CbCkq3ryGVawOFzWZQCRzNrODk",
        //     authDomain: "wko-lernplattform.firebaseapp.com",
        //     databaseURL: "https://wko-lernplattform.firebaseio.com",
        //     projectId: "wko-lernplattform",
        //     storageBucket: "wko-lernplattform.appspot.com",
        //     messagingSenderId: "214342629988"
        //   };
        // firebase.initializeApp(config);
    }
    selectView =()=>{
        var { loading, user} = this.store.getState().auth;
            user ? Actions.main() : Actions.auth();
            loading ? Actions.loading() : Actions.login();
    }
    store = configureStore();
    componentDidMount(){
        this.selectView();
    }
    render() {
       // var navigator = createRootNavigator(false);
        this.store.dispatch(signInWithoutPasswordAction());
        this.store.subscribe(this.selectView);
        return (
            <Provider store={this.store}>
                <Router />
            </Provider>
        );
    }
}

export default App;