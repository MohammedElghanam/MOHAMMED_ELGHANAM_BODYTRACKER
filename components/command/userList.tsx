import useList from '@/hooks/forms/useList';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = () => {

  const { users } = useList();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des utilisateurs</Text>
      {users.length === 0 ? (
        <Text>Aucun utilisateur enregistré.</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Text>Nom : {item.lastName || 'Non spécifié'}</Text>
              <Text>Prénom : {item.firstName || 'Non spécifié'}</Text>
              <Text>Âge : {item.age || 'Non spécifié'}</Text>
              <Text>Nationalité : {item.nationality || 'Non spécifié'}</Text>
              <Text>Poids : {item.weight ? `${item.weight} kg` : 'Non spécifié'}</Text>
              <Text>Taille : {item.height ? `${item.height} cm` : 'Non spécifié'}</Text>
              <Text>Adresse : {item.address || 'Non spécifié'}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default UserList;
