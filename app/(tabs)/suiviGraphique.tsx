import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function SuiviGraphique() {
  // Exemple de données de graisse corporelle (en %)
  const [data, setData] = useState([
    { semaine: 1, pourcentage: 25 },
    { semaine: 2, pourcentage: 24 },
    { semaine: 3, pourcentage: 23.5 },
    { semaine: 4, pourcentage: 23 },
    { semaine: 5, pourcentage: 22.5 },
  ]);


  const semaines = data.map((entry) => `Semaine ${entry.semaine}`);
  const pourcentages = data.map((entry) => entry.pourcentage);

  // Fonction pour ajouter de nouvelles données (par exemple, lors du calcul de la graisse corporelle)
  const ajouterDonnees = () => {
    const nouvelleSemaine = data.length + 1;
    const nouveauPourcentage = parseFloat((Math.random() * (25 - 20) + 20).toFixed(2)); 
    setData([...data, { semaine: nouvelleSemaine, pourcentage: nouveauPourcentage }]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Suivi de la graisse corporelle</Text>
      
      <LineChart
        data={{
          labels: semaines,
          datasets: [
            {
              data: pourcentages,
              strokeWidth: 2, 
            },
          ],
        }}
        width={windowWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#f7f7f7',
          backgroundGradientTo: '#f7f7f7',
          decimalPlaces: 2, 
          color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`, 
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier // courbe lissée
      />

      <Button title="Ajouter une donnée" onPress={ajouterDonnees} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
