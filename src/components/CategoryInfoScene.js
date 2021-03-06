import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Dimensions, StatusBar, View, Text, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { MainHeader } from './common';
import { Actions } from 'react-native-router-flux';
import { ActionButton, PopupCenter } from './common';

var screen = Dimensions.get("window");

const icon_pdf = (<Image style={{ width: 32, height: 32, marginLeft: 11, marginRight: 9 }} source={require('../img/ic_pdf.png')} />)
const icon_wrong_questions = (<Image style={{ width: 32, height: 32, marginLeft: 8, marginRight: 12 }} source={require('../img/ic_wrong_questions.png')} />)
const icon_continue = (<Image style={{ width: 32, height: 32, marginLeft: 8, marginRight: 12 }} source={require('../img/ic_continue.png')} />)
const icon_watch_questions = (<Image style={{ width: 32, height: 32, marginLeft: 8, marginRight: 12 }} source={require('../img/ic_look_questions.png')} />)

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
    </View>)

class CategoryInfoScene extends Component {
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
                        <Text style={styles.titleTextStyle}>
                            1.2 Grundzüge des bürgerlichen Rechts
                        </Text>
                        <View style={{ marginTop: 12 }}>
                            <Text style={styles.statisticTextStyle}>
                                Fortschritt Lernvorgang
                            </Text>
                            <View style={{ marginLeft: 20, marginRight: 20, flexDirection: "row" }}>
                                <Progress.Bar progress={0.72} height={32.4} width={0} style={{ width: "82%" }} color={'#58D980'} unfilledColor='#DEEBE1' borderWidth={0} borderRadius={0} />
                                <Text style={styles.percentTextStyle}>72%</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <Text style={styles.statisticTextStyle}>
                                Erfolgschance
                            </Text>
                            <View style={{ marginLeft: 20, marginRight: 20, flexDirection: "row" }}>
                                <Progress.Bar progress={0.36} height={32.4} width={0} style={{ width: "82%" }} color={'#58ACD9'} unfilledColor='#DEEBE1' borderWidth={0} borderRadius={0} />
                                <Text style={styles.percentTextStyle}>36%</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginRight: 20, marginLeft: 20, height: 45, backgroundColor: "#304C59", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                                86/102 Fragen richtig beantwortet
                            </Text>
                        </View>
                        <Text style={{ fontSize: 14, marginTop: 6, marginBottom: 16, fontWeight: "bold", color: "#304C59", width: '100%', textAlign: "center" }}>
                            14 Fragen richtig beatnwortet
                        </Text>
                        <Text style={styles.statisticTextStyle}>
                            Aktionen
                        </Text>
                        <ActionButton image={icon_continue} onPress={() => {
                            Actions.question();
                        }}>
                            Lernvorgang fortsetzen
                        </ActionButton>
                        <ActionButton image={icon_wrong_questions} onPress={() => {
                            Actions.question();
                        }}>
                            Falsche Fragen üben
                        </ActionButton>
                        <ActionButton image={icon_watch_questions} onPress={() => {
                            Actions.question();
                        }}>
                            Fragen druchblättern
                        </ActionButton>
                        <ActionButton image={icon_pdf} onPress={() => {
                            Actions.question();
                        }}>
                            PDF durchlessen
                        </ActionButton>
                    </SafeAreaView>
                </ScrollView>
                <PopupCenter ref={'popupCenter'}>

                </PopupCenter>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleTextStyle: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
        width: screen.width,
        textAlign: "center",
        fontWeight: "bold",
        color: "#304C59",
    },
    statisticTextStyle: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 4,
        fontWeight: "bold",
        color: "#304C59",
    },
    percentTextStyle: {
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 20,
        marginLeft: 8,
        color: "#304C59"
    },
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});

export default CategoryInfoScene;
