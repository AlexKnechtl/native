import React from 'react';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SubCategory = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Actions.info();
        }}>
            <View style={styles.containerStyle}>
                <View style={styles.titleStyle}>
                    <Text style={styles.titleTextStyle}>{props.titleText}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textStyle}>45% abgeschlossen</Text>
                        <Progress.Bar progress={0.45} height={12} width={190} color={'#fff'} unfilledColor='#304C59' />
                    </View>
                    <View style={{ flex: 1, marginTop: 6, alignItems: 'center', justifyContent: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={26}
                            borderWidth={4}
                            color="#fff"
                            shadowColor="#93A9AF"
                            bgColor="#304C59">
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>{'30%'}</Text>
                        </ProgressCircle>
                        <Text style={{ fontSize: 12, margin: 2, color: "#fff" }}>Erfolgschance</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#304C59",
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12
    },
    titleStyle: {
        backgroundColor: '#fff4',
        justifyContent: "center",
        height: 32
    },
    titleTextStyle: {
        fontSize: 18,
        marginLeft: 12,
        fontWeight: "bold",
        color: "#fff"
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 6,
        color: '#ffffff'
    }
});

export { SubCategory };
