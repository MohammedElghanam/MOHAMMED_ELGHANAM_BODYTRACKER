import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';


const Cards = () => {
return (
  <>
    <ScrollView>
      <View style={styles.container}>
        HDSDJ
      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'red'
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
});

export default Cards;