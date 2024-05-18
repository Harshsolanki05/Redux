import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';

function Secondpage({ navigation }) {
    //-------------- Redux ----------------
    const count = useSelector((store) => store.count.count)
    const product = useSelector((store) => store.product)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count : {count}</Text>           
            <Text style={styles.text}>Product:{product}</Text>           
            <Pressable style={{ backgroundColor: 'grey', top: 25, height: 40, width: 150, borderRadius: 5 }} onPress={() => navigation.navigate("First-Page")}>
                <Text style={{ fontSize: 20, textAlign: 'center', height: '100%', textAlignVertical: 'center' }}>First Page</Text>
            </Pressable>
        </View>
    );
};


export default Secondpage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 34,
        marginBottom: 20,
        color: 'black',
    },
    buttonContainer: {
        height: 100,
        width: 200,
        justifyContent: "space-evenly",
    },
});

