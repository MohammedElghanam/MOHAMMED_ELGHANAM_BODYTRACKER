// import React, { useState } from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { Contrast, Sepia, Grayscale } from 'react-native-image-filter-kit';

// const ImageFilterScreen = () => {
//   const [selectedFilter, setSelectedFilter] = useState<string>('none');
//   const imageUri = 'https://via.placeholder.com/300'; 

//   const renderFilteredImage = () => {
//     switch (selectedFilter) {
//       case 'contrast':
//         return <Contrast amount={2.0} image={<Image source={{ uri: imageUri }} style={styles.image} />} />;
//       case 'sepia':
//         return <Sepia image={<Image source={{ uri: imageUri }} style={styles.image} />} />;
//       case 'grayscale':
//         return <Grayscale image={<Image source={{ uri: imageUri }} style={styles.image} />} />;
//       default:
//         return <Image source={{ uri: imageUri }} style={styles.image} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>{renderFilteredImage()}</View>
//       <View style={styles.filterContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => setSelectedFilter('none')}>
//           <Text style={styles.buttonText}>None</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => setSelectedFilter('contrast')}>
//           <Text style={styles.buttonText}>Contrast</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => setSelectedFilter('sepia')}>
//           <Text style={styles.buttonText}>Sepia</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => setSelectedFilter('grayscale')}>
//           <Text style={styles.buttonText}>Grayscale</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f7f7f7',
//   },
//   imageContainer: {
//     width: 300,
//     height: 300,
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



// export default ImageFilterScreen;
