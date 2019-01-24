import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import { createRootNavigator } from './BetterRouter';
import { signInWithoutPasswordAction, configureStore } from 'core/lib';
import { Actions } from 'react-native-router-flux';

class App extends Component {
    selectView = () => {
        var { loading, user } = this.store.getState().auth;
        user ? Actions.main() : Actions.login();
        loading ? Actions.loading() : Actions.login();
    }

    store = configureStore();
    
    componentDidMount() {
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
