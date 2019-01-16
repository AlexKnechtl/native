import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScene from './components/LoginScene';
import HomeScene from './components/HomeScene';
import LoadingScene from './components/LoadingScene';
import QuestionScene from './components/QuestionScene';
import CategoryScene from './components/CategoryScene';
import CategoryInfoScene from './components/CategoryInfoScene';

export const createRootNavigator = (signedIn = false) => {
    const SignedIn = createStackNavigator({
        Home: {
            screen: HomeScene
        },
        Category: {
            screen: CategoryScene
        },
        Info: {
            screen: CategoryInfoScene
        },
        question: {
            screen: QuestionScene
        }
    })
    
    const main = createSwitchNavigator(
        {
            SignedIn:{
                screen: SignedIn
            },
            SignedOut:{
                screen: LoginScene
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn":"SignedOut"
        }
    )

    return main;
}
