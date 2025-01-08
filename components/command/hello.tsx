import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Hello() {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:50,
        backgroundColor: 'blue',
        height: 1000,
    },
    title: {
        color: 'red',
    }
})

export default Hello;