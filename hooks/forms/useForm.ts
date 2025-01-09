import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
 

const useForm = () =>  {

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
        await AsyncStorage.setItem('user_data', JSON.stringify(formData));
        Alert.alert('Succès', 'Les informations ont été sauvegardées avec succès !');
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des données :', error);
      }
    };
    
    const handleInputChange = (key, value) => {
      setFormData({ ...formData, [key]: value });
    };
    
    return {
        formData,
        handleInputChange,
        saveUserData
    };
    
}

export default useForm;