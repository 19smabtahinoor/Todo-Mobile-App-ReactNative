import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function AddTodo({ submitHandler}) {
    const [text, setText] = useState('')
    const changeHandler = (value) => {
        setText(value)
        // setText('')
    }

    return (
        <View>
            <Text style={styles.todoHeading}>Add Todo</Text>

            <View>
                <TextInput 
                style={styles.input}
                placeholder="New todo....."
                onChangeText={changeHandler}
                />
                <Button onPress={() => submitHandler(text)} title="Add todo" color='#793ef9' style={styles.button} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoHeading: {
        marginBottom: 8,
        fontSize: 20,
        color:'#793ef9',
        fontWeight:'bold'
    },
    input: {
        marginVertical:10,
        paddingVertical:6,
        paddingHorizontal:6,
        borderBottomColor:'#793ef9',
        borderBottomWidth:1
    },
    button : {
        borderRadius:10,
        marginTop:8,
        padding:10
    }
})
