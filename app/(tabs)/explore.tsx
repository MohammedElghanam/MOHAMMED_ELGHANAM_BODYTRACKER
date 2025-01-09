// import { StyleSheet, View, FlatList, Text } from 'react-native';

// const DATA = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

// export default function TabTwoScreen() {
//   return (
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.text}>{item.title}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.scrollView} // Pour ajouter du padding autour du contenu
//       />
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#6200ee',
//     flex:1,
//     padding: 40,
//     zIndex: 1, 
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     textAlign: 'center',
//   },

//   scrollView: {
//     padding: 16,
//   },

//   item: {
//     padding: 16,
//     marginBottom: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   text: {
//     fontSize: 16,
//   },
// });


import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcul de la graisse corporelle</Text>
      <TextInput placeholder="Tour de taille" style={styles.input} />
      <TextInput placeholder="Tour de cou" style={styles.input} />
      <TextInput placeholder="Tour de hanche" style={styles.input} />
      <Button title="Calculer" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8 },
});
