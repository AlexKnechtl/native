import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from './Button';

//Make a Component
const MainHeader = (props) => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.linearLayout}>
                <Image style={styles.imageStyle} source={require('../../img/logo_wko.png')} />
                <Text style={styles.textStyle}>{props.headerText}</Text>
            </View>
            <View style={styles.linearLayout}>
                <Button
                    children={props.buttonText}
                    style={{ backgroundColor: 'rgba(255,255,255, 0.0)', width: 240, marginLeft: 20, marginRight: 20, borderColor: '#fff4', borderWidth: 2, paddingLeft: 20, paddingRight: 20 }}>
                </Button>
                <Image style={styles.settingsImageStyle} source={require('../../img/ic_settings.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        fontWeight: "bold",
        textAlignVertical: 'bottom',
        color: '#ffffff',
        marginRight: 20
    },
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
        marginTop: 12,
        resizeMode: 'contain',
        marginRight: 20
    }
});

//Make the component available to other parts of the app
export { MainHeader };
