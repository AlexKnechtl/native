import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native';
import { MainHeader, SubCategory, PopupCenter } from './common';

const btnText = (
    <Text style={{ alignSelf: 'center', fontWeight: "bold", color: '#fff', fontSize: 20, paddingTop: 8, paddingBottom: 10 }}>
        Lernvorgang fortsetzen
    </Text>)

const mainHeaderText = (
    <View>
        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "right", textAlignVertical: 'bottom', color: '#ffffff', marginRight: 20 }}>
            Kategorien
        </Text>
        <Text style={{ fontSize: 18, textAlignVertical: 'bottom', textAlign: "right", color: '#fff4', marginRight: 20 }}>
            Allgemeine Rechtskunde
        </Text>
    </View>
)

const picture1 = require("../img/wk_allgemeinesrecht_bg.jpg")
const picture2 = require("../img/wk_sachversicherungen_bg.jpg")

class CategoryScene extends Component {
    constructor(props) {
        super(props);
        this.toogleModal = this.toogleModal.bind(this);
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
                    buttonText={btnText}
                    children={mainHeaderText}
                    optionsPress={() => this.toogleModal()}
                />
                <ScrollView
                    style={styles.containerStyle}
                    resizeMode='cover'>
                    <SafeAreaView>
                        <SubCategory imageUri={picture1} titleText="1.1 Allgemeine Rechtskunde" />
                        <SubCategory imageUri={picture2} titleText="1.2 Sachversicherungen" />
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
    },
});

export default CategoryScene;
