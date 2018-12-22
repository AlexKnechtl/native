import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Answer = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        alignSelf: 'center',
        color: '#144B86',
        fontSize: 14,
        padding: 8
    },
    buttonStyle: {
        flexDirection: 'row',
        minHeight: 90,
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#ffffff',
    }
});

export { Answer };