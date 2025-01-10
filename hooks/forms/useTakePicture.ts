import { useState } from 'react'
import { CameraType, useCameraPermissions } from 'expo-camera';

function useTakePicture() {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState<string | null>(null);

    const takePicture = async (cameraRef: any) => {
        if (cameraRef) {
            const imageData = await cameraRef.takePictureAsync();
            console.log(imageData);
            setImage(imageData.uri);
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