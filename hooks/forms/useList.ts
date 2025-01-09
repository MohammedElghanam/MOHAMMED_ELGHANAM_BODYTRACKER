import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/types/userTypes';

const useList = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem('user_data');
      if (savedUsers) {
        setUsers(JSON.parse(savedUsers));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs :', error);
    }
  };

  return {
    users
  }
}

export default useList;