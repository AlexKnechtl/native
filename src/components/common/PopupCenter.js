import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modalbox';

class PopupCenter extends Component {
    constructor(props) {
        super(props);
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    onLogoutPress() {
        //Logout Function
        this.props.logOut();
    }

    onModuleChangePress() {
        //Actions.question();
    }

    onImpressumPress() {
        //Actions.question();
    }

    onDataSecPress() {
        //Actions.question();
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='center'
                backdrop={true}>
                <View style={{
                    width: 280,
                    height: 45,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        justifyContent: "center",
                        color: "#304C59"
                    }}>
                        Profil und Impressum
                </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onLogoutPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Logout
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onModuleChangePress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Modul wechseln
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onImpressumPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Impressum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onDataSecPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Datenschutz
                    </Text>
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        height: null,
        width: 280,
        alignItems: "center",
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 18,
        backgroundColor: "#304C59"
    },
    buttonStyle: {
        width: 240,
        backgroundColor: "transparent",
        marginTop: 14,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#fff7',
        borderWidth: 2,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttonText: {
        alignSelf: 'center',
        fontWeight: "bold",
        color: '#fff',
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 10
    }
});

export default PopupCenter;
export {PopupCenter};