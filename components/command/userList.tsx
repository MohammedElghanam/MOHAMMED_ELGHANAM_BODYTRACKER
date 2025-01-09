import useList from '@/hooks/forms/useList';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = () => {

  // const { users } = useList();

  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      nationality: 'USA',
      weight: '75',
      height: '175',
      address: '123 Main St',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      nationality: 'USA',
      weight: '75',
      height: '175',
      address: '123 Main St',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      nationality: 'USA',
      weight: '75',
      height: '175',
      address: '123 Main St',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      nationality: 'USA',
      weight: '75',
      height: '175',
      address: '123 Main St',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      nationality: 'USA',
      weight: '75',
      height: '175',
      address: '123 Main St',
    },
  ];

  console.log(users);
  console.log(Array.isArray(users));
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des utilisateurs</Text>
      {users.length === 0 ? (
        <Text>Aucun utilisateur enregistré.</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item, index }) => {
            console.log(item.firstName);
            
            return(
              <View style={styles.userCard} key={index}>
                <Text>Nom : {item.lastName}</Text>
                <Text>Prénom : {item.firstName}</Text>
                <Text>Âge : {item.age}</Text>
                <Text>Nationalité : {item.nationality}</Text>
                <Text>Poids : {item.weight} kg</Text>
                <Text>Taille : {item.height} cm</Text>
                <Text>Adresse : {item.address}</Text>
              </View>
            );
           
          }}
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
