import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
 

const useForm = (loadUsers: () => void) =>  {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        nationality: '',
        weight: '',
        height: '',
        address: '',
    });
    
    const saveUserData = async () => {
      try {

        const savedUsers = await AsyncStorage.getItem('user_data');
        const parsedUsers = savedUsers ? JSON.parse(savedUsers) : []; 
  
        const updatedUsers = [...parsedUsers, formData];


        await AsyncStorage.setItem('user_data', JSON.stringify(updatedUsers));
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            nationality: '',
            weight: '',
            height: '',
            address: '',
        });
        // Alert.alert('Succès', 'Les informations ont été sauvegardées avec succès !');

        loadUsers();

      } catch (error) {
        console.error('Erreur lors de la sauvegarde des données :', error);
      }
    };
    
    const handleInputChange = (key: string, value: any) => {
      setFormData({ ...formData, [key]: value });
    };
    
    return {
        formData,
        handleInputChange,
        saveUserData
    };
    
}

export default useForm;