import { useState } from 'react'
import { CameraType, useCameraPermissions } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useTakePicture() {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    const takePicture = async (cameraRef: any) => {
        if (cameraRef) {
            const imageData = await cameraRef.takePictureAsync();
            await saveImageUri(imageData.uri);
        }
    };

    const saveImageUri = async (uri: string) => {
        try {
          const existingUris = await AsyncStorage.getItem('capturedImageUris');
          const uris = existingUris ? JSON.parse(existingUris) : [];
      
          uris.push(uri);
      
          await AsyncStorage.setItem('capturedImageUris', JSON.stringify(uris));
          console.log('Image URI saved:', uri);
        } catch (error) {
          console.error('Error saving image URI:', error);
        }
    };

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return {
        facing,
        permission,
        requestPermission,
        takePicture,
        toggleCameraFacing,
    };

}

export default useTakePicture;