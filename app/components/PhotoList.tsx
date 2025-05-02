import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { listAllCuteCats, getCatImageById } from '@/api';

export default function PhotoList() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    listAllCuteCats().then((data) => {
      const urls = data.map((id) => getCatImageById(id));
      setImages(urls);
    });
  }, []);

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
});
