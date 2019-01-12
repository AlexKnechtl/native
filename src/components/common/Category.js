import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import ProgressCircle from 'react-native-progress-circle'
import { StyleSheet, ImageBackground, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Category = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Actions.category();
            }}>
            <View>
                <ImageBackground
                    source={props.imageUri}
                    resizeMode='cover' style={styles.containerStyle}
                    imageStyle={{ flex: 1 }}>
                    <View>
                        <View style={styles.titleStyle}>
                            <Text style={styles.titleTextStyle}>{props.titleText}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.textStyle}>45% abgeschlossen</Text>
                                <ProgressBar progress={0.45} height={12} width={190} color={'#fff'} unfilledColor='#93A9AF' borderWidth={0} borderRadius={0} />
                                <Text style={styles.textStyle}>3 Fragen falsch beantwortet</Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <ProgressCircle
                                    percent={45}
                                    radius={28}
                                    borderWidth={4}
                                    color="#fff"
                                    shadowColor="#93A9AF"
                                    bgColor="#304C59">
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>{'45%'}</Text>
                                </ProgressCircle>
                                <Text style={{ fontSize: 14, margin: 3, color: "#fff" }}>Erfolgschance</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground >
            </View>
        </TouchableWithoutFeedback>
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
