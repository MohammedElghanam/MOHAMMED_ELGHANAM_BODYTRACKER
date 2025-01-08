import { Image, StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Hello from '@/components/command/hello';
import Cards from '@/components/command/cards';
import useTest from '@/hooks/forms/useTest';

export default function HomeScreen() {
  const { test, setTest, handelSubmit } = useTest();

  return (
    <View style={styles.screen}>
      {/* Composants externes */}
      {/* <Hello /> */}
      <Cards />

      {/* Section de formulaire */}
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.testInput}
          placeholder="Tapez quelque chose"
          value={test}
          onChangeText={(text) => setTest(text)}
        />
        <Button title="Rechercher" onPress={handelSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Ajout d'une couleur de fond pour un design agréable
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // Ajout de padding pour un meilleur espacement
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  testInput: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 4,
  },
});
