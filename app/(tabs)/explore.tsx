import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

export default function ProfileScreen() {
  const [taille, setTaille] = useState('');
  const [tourDeTaille, setTourDeTaille] = useState('');
  const [tourDeCou, setTourDeCou] = useState('');
  const [tourDeHanche, setTourDeHanche] = useState('');
  const [sexe, setSexe] = useState('homme'); // homme ou femme

  const calculerGraisseCorporelle = () => {
    const tailleNum = parseFloat(taille);
    const tailleNumLog = Math.log10(tailleNum);
    const tourTailleNum = parseFloat(tourDeTaille);
    const tourCouNum = parseFloat(tourDeCou);
    const tourHancheNum = parseFloat(tourDeHanche);

    if (isNaN(tailleNum) || isNaN(tourTailleNum) || isNaN(tourCouNum) || (sexe === 'femme' && isNaN(tourHancheNum))) {
      Alert.alert('Erreur', 'Veuillez entrer toutes les données correctement.');
      return;
    }

    let pourcentageGraisse;
    if (sexe === 'homme') {
      pourcentageGraisse =
        86.010 * Math.log10(tourTailleNum - tourCouNum) - 70.041 * tailleNumLog + 36.76;
    } else {
      pourcentageGraisse =
        163.205 * Math.log10(tourTailleNum + tourHancheNum - tourCouNum) -
        97.684 * tailleNumLog -
        78.387;
    }

    Alert.alert(
      'Résultat',
      `Votre pourcentage de graisse corporelle est de ${pourcentageGraisse.toFixed(2)}%`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcul de la graisse corporelle</Text>
      <TextInput
        placeholder="Taille (cm)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setTaille}
        value={taille}
      />
      <TextInput
        placeholder="Tour de taille (cm)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setTourDeTaille}
        value={tourDeTaille}
      />
      <TextInput
        placeholder="Tour de cou (cm)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setTourDeCou}
        value={tourDeCou}
      />
      {sexe === 'femme' && (
        <TextInput
          placeholder="Tour de hanche (cm)"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setTourDeHanche}
          value={tourDeHanche}
        />
      )}
      <Button title="Calculer" onPress={calculerGraisseCorporelle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, borderRadius: 4 },
});
