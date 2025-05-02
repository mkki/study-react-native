import { getCatImageById } from '@/api';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

type CatImageItemProps = {
  image: string;
};

export default function CatImageItem({ image }: CatImageItemProps) {
  const [loading, setloading] = useState(true);

  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator style={styles.image} />}
      <Image
        source={{ uri: image }}
        style={styles.image}
        onLoadEnd={() => setloading(false)}
      />
    </View>
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
