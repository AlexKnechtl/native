import React from 'react';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';

const Category = (props) => {
    return (
        <TouchableOpacity>
            <ImageBackground
                source={props.imageUri}
                resizeMode='cover' style={styles.containerStyle}
                imageStyle={{ flex: 1 }}>
                <View>
                    <View style={styles.titleStyle}>
                        <Text style={styles.titleTextStyle}>1 Allgemeine Rechtskunde</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.textStyle}>45% abgeschlossen</Text>
                            <Progress.Bar progress={0.45} height={12} width={190} color={'#fff'} unfilledColor='#304C59' />
                            <Text style={styles.textStyle}>3 Fragen falsch beantwortet</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 8, alignItems: 'center', justifyContent: 'center' }}>
                            <ProgressCircle
                                percent={30}
                                radius={28}
                                borderWidth={4}
                                color="#f00"
                                shadowColor="#fff"
                                bgColor="#304C59">
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>{'30%'}</Text>
                            </ProgressCircle>
                            <Text style={{ fontSize: 14, margin: 3, color: "#fff" }}>Erfolgschance</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 130,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12
    },
    titleStyle: {
        backgroundColor: '#fff4',
        justifyContent: "center",
        height: 40
    },
    titleTextStyle: {
        fontSize: 20,
        marginLeft: 12,
        fontWeight: "bold",
        color: "#fff"
    },
    textStyle: {
        fontSize: 16,
        margin: 8,
        color: '#ffffff'
    }
});

export { Category };
