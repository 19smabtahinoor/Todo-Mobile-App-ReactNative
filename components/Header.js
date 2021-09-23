import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
        return (
            <View style={styles.header}>
                <Text style={styles.heading}> AN Todos </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    header : {
        height:80,
        paddingTop:22,
        backgroundColor:'#793ef9'
    },
    heading : {
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
