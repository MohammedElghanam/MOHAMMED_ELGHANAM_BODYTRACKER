import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function useListPicture() {

    const [imageUris, setImageUris] = useState<string[]>([]);

    const displayImages = async () => {
        const uris = await getImageUris();
        setImageUris(uris); // Assuming `imageUris` is a state variable
      };
      
      useEffect(() => {
        displayImages();
      }, []);

      const getImageUris = async () => {
        try {
          const uris = await AsyncStorage.getItem('capturedImageUris');
          if (uris) {
            const parsedUris = JSON.parse(uris);
            console.log('Retrieved Image URIs:', parsedUris);
            return parsedUris; 
          }
          return [];
        } catch (error) {
          console.error('Error retrieving image URIs:', error);
          return [];
        }
      };

      return {
        imageUris
      };
      
}

export default useListPicture