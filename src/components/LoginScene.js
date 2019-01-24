import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Keyboard, StyleSheet, Image, StatusBar, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
//import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Input, Button, Spinner } from './common';
import { signInAction } from 'core';

const userIcon = (<Image style={{ width: 28, height: 28 }} source={require('../img/ic_user.png')} />)
const lockIcon = (<Image style={{ width: 28, height: 28 }} source={require('../img/ic_password.png')} />)

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const buttonText = (
    <Text style={{ alignSelf: 'center', color: '#304C59', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
        Anmelden
    </Text>)

class LoginScene extends Component {
    state = {
        email: "",
        password: ""
    };
    onEmailChange(text) {
        this.setState({ email: text });
    }

    onPasswordChange(text) {
        this.setState({ password: text });
    }

    onButtonPress() {
        console.log("Before Login");

        this.props.loginUser(this.state);
        console.log("After Loginpress");
    }

    renderError() {
        console.log(`renderError(${this.props.error})`);

        if (this.props.error && this.props.error != "") {
            return (
                <View style={{ marginTop: 8 }} >
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    // renderSpinner() {
    //     // console.log(`renderSpinner(${this.props.loading})`);

    //     // if (this.props.loading) {
    //     //     return <Spinner size="large" />;
    //     // }
    // }

    render() {
        return (
            <ImageBackground
                style={styles.containerStyle}
                source={require('../img/login_background.png')}
                resizeMode='cover'>
                <SafeAreaView style={{ backgroundColor: "#304C59" }}>
                    <StatusBar
                        backgroundColor="#304C59"
                        barStyle="light-content"
                    />
                </SafeAreaView >
                <DismissKeyboard>
                    <SafeAreaView style={{ alignItems: 'center' }}>
                        <Image style={styles.logoBig} source={require('../img/logo_wko.png')} />
                        <View style={styles.rectangleStyle}>
                            <Text style={styles.headerText}>
                                Versicherungsagent
                    </Text>
                        </View>
                        <View style={styles.rectangleStyle}>
                            <Image style={styles.logoSmall} source={require('../img/seek_innovation_logo.png')} />
                            <Text style={styles.smallHeaderText}>
                                Powered by SeekInnovation
                    </Text>
                        </View>
                        <View style={{ marginTop: 42 }}>
                            <Input
                                children={userIcon}
                                placeholderText="Username"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.state.email}
                            />
                            <Input
                                children={lockIcon}
                                secureTextEntry
                                placeholderText="Passwort"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.state.password}
                            />
                            <Button children={buttonText}
                                onPress={this.onButtonPress.bind(this)}>
                            </Button>
                        </View>
                        {this.renderError()}
                        {/* {this.renderSpinner()} */}
                    </SafeAreaView>
                </DismissKeyboard>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    headerText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: "bold",
        alignSelf: 'center'
    },
    smallHeaderText: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center"
    },
    rectangleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        paddingLeft: 12,
        flexDirection: "row",
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 2,
        borderColor: '#fff4'
    },
    logoBig: {
        marginTop: 65,
        resizeMode: "contain",
        height: 65,
        width: 210
    },
    logoSmall: {
        resizeMode: "contain",
        width: 32,
        height: 32,
        marginRight: 10
    },
    iconStyle: {
        height: 28,
        width: 28
    }
});

const mapStateToProps = state => ({
    error: state.auth.error,
    loading: state.auth.loading
});

const mapDispatchToProps = {
    loginUser: signInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene); 
