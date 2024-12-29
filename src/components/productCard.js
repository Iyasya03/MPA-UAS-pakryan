import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ name, price }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>${price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: '#fff', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#888' },
});

export default ProductCard;