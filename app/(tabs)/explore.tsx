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
