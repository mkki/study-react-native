import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { listAllCuteCats, getCatImageById } from '@/api';
import CatImageItem from './PhotoItem';

export default function PhotoList() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const ids = await listAllCuteCats();
        const urls = ids.map((id) => getCatImageById(id));
        setImages(urls);
      } catch (err) {
        setError('이미지를 불러오지 못했습니다.');
      }
    };
    fetchCats();
  }, []);

  if (error) return <Text style={styles.error}>{error}</Text>;

  const renderItem = ({ item }: { item: string }) => (
    <CatImageItem image={item} />
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(image) => image}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  error: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
