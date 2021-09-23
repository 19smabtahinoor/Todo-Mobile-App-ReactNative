import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem({ item, pressHanlder}) {
    return (
        <TouchableOpacity onPress={() => pressHanlder(item.key) }>
            <Text style={styles.todoItem}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem : {
        padding:16,
        backgroundColor:'#ddd6fe',
        marginTop:10,
        borderRadius:8,
    }
})
