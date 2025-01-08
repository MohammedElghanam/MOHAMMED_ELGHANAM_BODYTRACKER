import { useState } from "react"
import { Alert } from "react-native";

const useTest = () => {
    const [test, setTest] = useState('');

    const handelSubmit = () => {
        console.log(test);
        
        if (test && test.length > 0) {
            Alert.alert('Contenu du TextInput', test);
        } else {
            Alert.alert('Erreur', 'Le champ de texte est vide'); 
        }
    }

    return {
        test,
        setTest,
        handelSubmit
    }
}

export default useTest;