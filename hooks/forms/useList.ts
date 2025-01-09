import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/types/userTypes';
import { Alert } from 'react-native';

const useList = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem('user_data');
      if (savedUsers) {
        const savedUsers = await AsyncStorage.getItem('user_data');
        console.log('Raw data from AsyncStorage:', savedUsers); // Logs the raw string
        if (savedUsers) {
          const parsedUsers = JSON.parse(savedUsers);
          console.log('Parsed data:', parsedUsers); // Logs the parsed object
          setUsers(Array.isArray(parsedUsers) ? parsedUsers : []);
      }}

      
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs :', error);
    }
  };

  return {
    users
  }
}

export default useList;