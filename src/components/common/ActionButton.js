import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const ActionButton = ({ onPress, children, image }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            {image}
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        height: 46,
        marginBottom: 12,
        flexDirection: "row",
        marginRight: 20,
        alignItems: "center",
        marginLeft: 20,
        borderColor: "#304C59",
        borderWidth: 2,
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#304C59"
    }
});

export { ActionButton };
