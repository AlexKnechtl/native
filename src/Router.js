import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginScene from './components/LoginScene';
import HomeScene from './components/HomeScene';
import LoadingScene from './components/LoadingScene';
import QuestionScene from './components/QuestionScene';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#304C59' }} titleStyle={styles.navTitle} >
            <Stack key="root" statusBarStyle="light-content" hideNavBar>
                <Stack key="auth" navigationBarStyle={{ backgroundColor: '#304C59' }} hideNavBar>
                    <Scene key='loading' component={LoadingScene} />
                    <Scene key="login" component={LoginScene} />
                </Stack>
                <Stack key="main" hideNavBar>
                    <Scene key="home" component={HomeScene} />
                    <Scene key="question" component={QuestionScene} />
                    <Scene key="login" component={LoginScene} />
                </Stack>
            </Stack>
        </Router >
    );
};

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red', // changing navbar color
    },
    navTitle: {
        color: 'white', // changing navbar title color
        flex: 1,
        textAlign: 'center',
        fontSize: 20
    }
});

export default RouterComponent;
