import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from './Button';

//Make a Component
const MainHeader = (props) => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.linearLayout}>
                <Image style={styles.imageStyle} source={require('../../img/logo_wko.png')} />
                {props.children}
            </View>
            <View style={styles.linearLayout}>
                <Button
                    onPress={props.onPressButton}
                    children={props.buttonText}
                    style={{ backgroundColor: 'rgba(255,255,255, 0.0)', width: 255, marginLeft: 20, marginRight: 20, borderColor: '#fff4', borderWidth: 2, paddingLeft: 8, paddingRight: 8 }}>
                </Button>
                <TouchableOpacity onPress={props.optionsPress}>
                    <View style={styles.optionsViewStyle}>
                        <Image style={styles.settingsImageStyle} source={require('../../img/ic_options.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        backgroundColor: '#304C59',
        shadowColor: '#000',
        height: 150,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 6,
        position: 'relative'
    },
    optionsViewStyle: {
        width: 46,
        height: 46,
        marginTop: 12,
        marginRight: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#fff4",
        borderWidth: 2,
    },
    linearLayout: {
        marginTop: 12,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageStyle: {
        resizeMode: 'contain',
        marginLeft: 20,
        height: 35,
        width: 95
    },
    settingsImageStyle: {
        width: 42,
        height: 42,
    }
});

//Make the component available to other parts of the app
export { MainHeader };
