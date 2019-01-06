import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get("window");

export default class PopupBottom extends Component {
    constructor(props) {
        super(props);
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    onLogoutPress() {

    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='bottom'
                backdrop={true}>
                <View style={styles.linearLayout}>
                    <TouchableOpacity style={{
                        flex: 1,
                        backgroundColor: 'rgba(255,255,255, 0.0)',
                        borderColor: '#fff7',
                        alignItems: "center",
                        marginRight: 12,
                        borderWidth: 2
                    }} onPress={() => this.toogleModal()}>
                        <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
                            Zurück
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.toogleModal()}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={{ width: 24, height: 30, marginRight: 12 }} source={require('../../img/ic_pdf_color.png')} />
                            <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>
                                PDF öffnen
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 12, alignSelf: "center", color: "white" }}>
                    3.5 Private Unfallversicherung
                </Text>
                <Text style={{ fontSize: 20, marginTop: 6, marginBottom: 10, alignSelf: "center", color: "white" }}>
                    Frage 09 / 11
                </Text>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        height: 150,
        backgroundColor: "#304C59",
        shadowRadius: 10,
        width: screen.width
    },
    buttonStyle: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        borderColor: '#fff7',
        borderWidth: 2,
        paddingLeft: 16,
        paddingRight: 16
    },
    linearLayout: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    }
});

export { PopupBottom };
