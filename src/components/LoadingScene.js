import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ActivityIndicator, ImageBackground, View, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from "firebase";
import { signInWithoutPasswordAction } from 'core';


class LoadingScene extends Component {
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
                <SafeAreaView style={{ alignItems: "center", marginTop: 150 }} >
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
                    <View style={{ marginTop: 32 }}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
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
    textStyle: {
        fontSize: 32,
        marginTop: 25,
        marginBottom: 25,
        color: '#fff'
    },
    smallText: {
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 12
    }
});

const mapStateToProps = state => ({
    user: state.auth.user,
    loading: state.auth.loading,
});

const mapDispatchToProps = {
    DispatchSignIn: signInWithoutPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScene);