import useForm from '@/hooks/forms/useForm';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native'

const UserForm = () => {

  const { formData, handleInputChange, saveUserData } = useForm();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulaire Utilisateur</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={formData.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={formData.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Âge"
        value={formData.age}
        onChangeText={(text) => handleInputChange('age', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nationalité"
        value={formData.nationality}
        onChangeText={(text) => handleInputChange('nationality', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Poids (kg)"
        value={formData.weight}
        onChangeText={(text) => handleInputChange('weight', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Taille (cm)"
        value={formData.height}
        onChangeText={(text) => handleInputChange('height', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse"
        value={formData.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      <Button title="Sauvegarder" onPress={saveUserData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default UserForm;
