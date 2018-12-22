import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native';
import { MainHeader, Category } from './common';

const btnText = (
    <Text style={{ alignSelf: 'center', fontWeight: "bold", color: '#fff', fontSize: 20, paddingTop: 8, paddingBottom: 10 }}>
        Prüfung starten
    </Text>)

const picture1 = require("../img/wk_allgemeinesrecht_bg.jpg")

class HomeScene extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: "#304C59" }}>
                    <StatusBar
                        backgroundColor="#304C59"
                        barStyle="light-content"
                    />
                </SafeAreaView >
                <MainHeader buttonText={btnText} headerText='Übungsbereiche' />
                <ScrollView
                    style={styles.containerStyle}
                    resizeMode='cover'>
                    <SafeAreaView>
                        <Category imageUri={picture1} />
                        <Category imageUri={picture1} />
                    </SafeAreaView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});

export default HomeScene;
