import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Answer, PopupBottom } from './common';

const buttonText1 = (
    <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
        Optionen
    </Text>)

const buttonText2 = (
    <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
        Weiter
    </Text>)

class QuestionScene extends Component {
    constructor(props) {
        super(props);
        this.toogleModal = this.toogleModal.bind(this);
    }

    toogleModal() {
        this.refs.popupBottom.showAddModal();
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <SafeAreaView>
                    <View style={{ height: 180 }}>
                        <View style={styles.linearLayout}>
                            <Text style={styles.questionTextHeader}>
                                3.5 Frage 9
                            </Text>
                            <Image style={styles.imageStyle} source={require('../img/logo_wko.png')} />
                        </View>
                        <Text style={styles.questionText}>
                            Welche der nachstehenden angeführten Krankheiten ist/sind im Rahmen der privaten Unfallversicherung mitversichert?
                        </Text>
                    </View>
                </SafeAreaView>

                <View style={styles.questionView}>
                    <Text style={styles.answerHeaderText}>
                        Antworten
                    </Text>
                    <Answer>
                        Zweckmässige Schutzbekleidung ist neben einer vorrauschauenden Fahrweise der wichtigste Schutz.
                    </Answer>
                    <Answer>
                        2. Die Alzheimer'sche Krankheiten
                    </Answer>
                    <Answer>
                        3. Wundstarrkrampf und Tollwut
                    </Answer>
                    <View style={styles.bottom}>
                        <View style={styles.linearLayout}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.toogleModal()}>
                                <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
                                    Optionen
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                backgroundColor: 'rgba(255,255,255, 0.0)',
                                borderColor: '#fff4',
                                marginTop: 12,
                                alignItems: "center",
                                marginLeft: 12,
                                borderWidth: 2,
                                paddingLeft: 24,
                                paddingRight: 24
                            }} onPress={() => this.toogleModal()}>
                                <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
                                    Weiter
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <PopupBottom ref={'popupBottom'} >

                    </PopupBottom>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionView: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#304C59',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 0.2,
        elevation: 6
    },
    buttonStyle: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        borderColor: '#fff4',
        marginTop: 12,
        borderWidth: 2,
        paddingLeft: 24,
        paddingRight: 24
    },
    linearLayout: {
        marginTop: 12,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    questionTextHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#304C59'
    },
    questionText: {
        fontSize: 17,
        color: '#304C59',
        marginLeft: 18,
        marginRight: 12,
        marginTop: 6
    },
    answerHeaderText: {
        fontSize: 28,
        color: '#ffffff',
        marginLeft: 20,
        marginTop: 12
    },
    imageStyle: {
        resizeMode: 'center',
        height: 45,
        width: 100
    }
});

export default QuestionScene;
