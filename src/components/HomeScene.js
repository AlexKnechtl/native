import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native';
import { MainHeader, Category, PopupCenter } from './common';

const btnText = (
    <Text style={{ alignSelf: 'center', fontWeight: "bold", color: '#fff', fontSize: 20, paddingTop: 8, paddingBottom: 10 }}>
        Prüfung starten
    </Text>)

const mainHeaderText = (
    <Text style={{ fontSize: 26, fontWeight: "bold", textAlignVertical: 'bottom', color: '#ffffff', marginRight: 20 }}>
        Übungsbereiche
    </Text>
)

const picture1 = require("../img/wk_allgemeinesrecht_bg.jpg")
const picture2 = require("../img/wk_sachversicherungen_bg.jpg")

class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = { testMode: false };
        this.toogleModal = this.toogleModal.bind(this);
    }

    toogleTestMode() {
        this.setState({
            testMode: !this.state.testMode
        });
        console.log('Test Mode value is now: ', this.state.testMode);
    }

    toogleModal() {
        this.refs.popupCenter.showAddModal();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: "#304C59" }}>
                    <StatusBar
                        backgroundColor="#304C59"
                        barStyle="light-content"
                    />
                </SafeAreaView >
                <MainHeader
                    onPressButton={() => this.toogleTestMode()}
                    optionsPress={() => this.toogleModal()}
                    buttonText={btnText}
                    headerText='Übungsbereiche'
                    children={mainHeaderText} />
                <ScrollView
                    style={styles.containerStyle}
                    resizeMode='cover'>
                    <SafeAreaView>
                        <Category imageUri={picture1} titleText="1 Allgemeine Rechtskunde" />
                        <Category imageUri={picture2} titleText="2 Sachversicherungen" />
                    </SafeAreaView>
                </ScrollView>
                <PopupCenter ref={'popupCenter'}>

                </PopupCenter>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

export default HomeScene;