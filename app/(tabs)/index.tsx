import { Image, StyleSheet, View, Platform, TextInput, Button } from 'react-native';

import Hello from '@/components/command/hello';
import Cards from '@/components/command/cards';
import useTest from '@/hooks/forms/useTest';


export default function HomeScreen() {

  const { test, setTest, handelSubmit} = useTest();
  
  return (
    <View>


      <Hello />
      <Cards />

      <View>

        <View style={styles.container}>
          <TextInput
            style={styles.testInput}
            placeholder="Tapez quelque chose"
            value={test}  
            onChangeText={(text) => setTest(text)} 
          />
          <Button title="Rechercher" onPress={handelSubmit} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  testInput: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
