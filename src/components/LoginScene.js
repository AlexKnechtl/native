import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Input, Button, Spinner } from './common';

const userIcon = (<Image style={{ width: 28, height: 28 }} source={require('../img/ic_user.png')} />)
const lockIcon = (<Image style={{ width: 28, height: 28 }} source={require('../img/ic_password.png')} />)

const buttonText = (
    <Text style={{ alignSelf: 'center', color: '#304C59', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
        Anmelden
    </Text>)

class LoginScene extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ marginTop: 8 }} >
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderSpinner() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
    }

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
                            value={this.props.email}
                        />
                        <Input
                            children={lockIcon}
                            secureTextEntry
                            placeholderText="Passwort"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                        <Button children={buttonText}
                            onPress={this.onButtonPress.bind(this)}>
                        </Button>
                    </View>
                    {this.renderError()}

                    {this.renderSpinner()}
                </SafeAreaView>
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
        marginTop: 50,
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

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginScene); 
