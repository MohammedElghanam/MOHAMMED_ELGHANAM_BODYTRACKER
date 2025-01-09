import { View, Text, Button, StyleSheet } from 'react-native';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prise de Photos</Text>
      <Button title="Ouvrir la caméra" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding:16 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
