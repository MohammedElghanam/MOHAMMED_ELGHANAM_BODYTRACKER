import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import useListPicture from '@/hooks/forms/useListPicture';

const GalleryScreen = () => {
  const { imageUris } = useListPicture();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {imageUris.length > 0 ? (
          imageUris.map((uri, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri }} style={styles.image} />
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No images found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    marginBottom: 16,
    marginHorizontal: '1%',
    width: '48%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 32,
  },
});

export default GalleryScreen;
