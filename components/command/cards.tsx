import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';


const Cards = () => {
return (
  <>
    <View style={ styles.container }>
        <Text> test </Text>
    </View>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'red'
},
});

export default Cards;