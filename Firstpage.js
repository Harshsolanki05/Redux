import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addvalue, subtracvalue } from './redux/actions/countAction';
import { addproduct } from './redux/actions/addCartAction';

function Firstpage({ navigation }) {
    //-------------- Redux ----------------     
    const dispatch = useDispatch();
    const [txt, settxt] = useState(0);
    const product = [
        {
            name: 'Product 1',
            price: '100',
        },
        {
            name: 'Product 2',
            price: '200',
        },
        {
            name: 'Product 3',
            price: '300',
        }
    ]

    const count = useSelector((store) => store.count.count);
    const productnum = useSelector((store) => store.product);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const addvalueHandle = () => {
        dispatch(addvalue(txt));
    };

    const subtracHandle = () => {
        dispatch(subtracvalue(txt));
    };

    const addprodectHandle = (item) => {
        
        dispatch(addproduct(item));
        console.log("Item -- ", item);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count : {count}, Product : {productnum.length}  </Text>
            <TextInput style={{ height: 40, width: 200, borderWidth: 1, marginBottom: 5, borderRadius: 5, padding: 5, backgroundColor: 'white', color: 'black', fontSize: 20, fontWeight: '500', textAlign: 'center', letterSpacing: 3, textAlignVertical: 'center', }} onChangeText={settxt}></TextInput>
            <View style={styles.buttonContainer}>

                <Button title="Increment" onPress={handleIncrement}/>
                <Button title="Decrement" onPress={handleDecrement}/>
                <Button title="Add Value" onPress={addvalueHandle}/>
                <Button title="subtrac Value" onPress={subtracHandle}/>

                {
                    product.map((item, val) => {
                        return (
                            <View key={val} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: 'black', width: 80, textAlign: "center", fontSize: 15, fontWeight: '500' }}>{item.name}</Text>
                                <View>
                                    <Pressable style={{ backgroundColor: 'grey', width: 100, borderRadius: 5, }} onPress={() => addprodectHandle(item)}>
                                        <Text style={{ textAlign: "center", fontWeight: "bold" }}> Add to cart </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <Pressable style={{ backgroundColor: 'grey', top: 25, height: 40, width: 150, borderRadius: 5 }} onPress={() => navigation.navigate("Second-Page")}>
                <Text style={{ fontSize: 20, textAlign: 'center', height: '100%', textAlignVertical: 'center' }}>Second Page</Text>
            </Pressable>
            <Text style={{ top: 100, width: '80%', textAlign: "right", letterSpacing: 3, color: 'black', fontSize: 15, fontWeight: '400' }}>- Harsh</Text>
        </View>
    );
};


export default Firstpage
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
        height: 350,
        width: 200,
        // backgroundColor:'blue',
        justifyContent: "space-evenly",
    },
});

