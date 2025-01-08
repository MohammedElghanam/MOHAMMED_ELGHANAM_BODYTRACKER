import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Hello() {
  return (
    <View style={styles.header}>
          <Text style={styles.headerText}>Header Fixed at Top</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200ee',
        height: 40,
        marginTop:30,
        // padding: 0,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, 
      },
      headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
})

export default Hello;