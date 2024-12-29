import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product ID: {productId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});

export default ProductDetail;