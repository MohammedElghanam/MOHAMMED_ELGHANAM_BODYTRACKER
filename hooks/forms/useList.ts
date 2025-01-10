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
        const parsedUsers = JSON.parse(savedUsers);
        setUsers(parsedUsers);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs :', error);
    }
  };

  return {
    users,
    loadUsers
  }
}

export default useList;