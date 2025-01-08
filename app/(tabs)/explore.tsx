import { StyleSheet, View, FlatList, Text } from 'react-native';

const DATA = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

export default function TabTwoScreen() {
  return (
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.scrollView} // Pour ajouter du padding autour du contenu
      />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    flex:1,
    padding: 40,
    zIndex: 1, 
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  scrollView: {
    padding: 16,
  },

  item: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});
