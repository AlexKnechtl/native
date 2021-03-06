import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Answer, PopupBottom } from './common';
import { updateCurrentQuestion, getNextQuestionAction } from 'core';

class QuestionScene extends Component {
    state = {
        answer1Clicked: false,
        answer2Clicked: false,
        answer3Clicked: false
    }

    constructor(props) {
        super(props);
        this.toogleModal = this.toogleModal.bind(this);
    }

    answer1Click() {
        this.setState({ answer1Clicked: false });
        this.setState({ answer2Clicked: true });
        this.setState({ answer3Clicked: true });
    }

    answer2Click() {
        this.setState({ answer2Clicked: false });
        this.setState({ answer1Clicked: true });
        this.setState({ answer3Clicked: true });
    }

    answer3Click() {
        this.setState({ answer3Clicked: false });
        this.setState({ answer1Clicked: true });
        this.setState({ answer2Clicked: true });
    }

    toogleModal() {
        this.refs.popupBottom.showAddModal();
    }

    render() {
        if(!this.props.currentQuestion) this.props.dispatchGetNextQuestion();
        console.log(this.props.currentQuestion);
        
        const { answer1Clicked, answer2Clicked, answer3Clicked } = this.state;

        const background1 = answer1Clicked ? "#fff9" : "white";
        const background2 = answer2Clicked ? "#fff9" : "white";
        const background3 = answer3Clicked ? "#fff9" : "white";

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
                            Welche5 der nachstehenden angeführten Krankheiten ist/sind im Rahmen der privaten Unfallversicherung mitversichert?
                        </Text>
                    </View>
                </SafeAreaView>

                <View style={styles.questionView}>
                    <Text style={styles.answerHeaderText}>
                        Antworten
                    </Text>
                    <TouchableOpacity
                        onPress={this.answer1Click.bind(this)}
                        style={{
                            flexDirection: 'row', minHeight: 90, alignItems: 'center', marginHorizontal: 20, marginTop: 20, backgroundColor: background1
                        }}>
                        <Text style={{ flex: 1, alignSelf: 'center', color: "#304C59", fontSize: 14, padding: 8 }}>
                            1. Zweckmässige Schutzbekleidung ist neben einer vorrauschauenden Fahrweise der wichtigste Schutz.
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.answer2Click.bind(this)}
                        style={{
                            flexDirection: 'row', minHeight: 90, alignItems: 'center', marginHorizontal: 20, marginTop: 20, backgroundColor: background2
                        }}>
                        <Text style={{ flex: 1, alignSelf: 'center', color: "#304C59", fontSize: 14, padding: 8 }}>
                            2. Die Alzheimer'sche Krankheiten
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.answer3Click.bind(this)}
                        style={{
                            flexDirection: 'row', minHeight: 90, alignItems: 'center', marginHorizontal: 20, marginTop: 20, backgroundColor: background3
                        }}>
                        <Text style={{ flex: 1, alignSelf: 'center', color: "#304C59", fontSize: 14, padding: 8 }}>
                            3. Wundstarrkrampf und Tollwut
                        </Text>
                    </TouchableOpacity>
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
    answerButtonStyle: {
        flexDirection: 'row',
        minHeight: 90,
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: '#ffffff',
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

// export default QuestionScene;

const mapDispatchToProps = {
    dispatchUpdateQuestion: updateCurrentQuestion,
    dispatchGetNextQuestion: getNextQuestionAction
};

const mapStateToProps = state => ({
    currentQuestion: state.learning.currentQuestion,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScene);
