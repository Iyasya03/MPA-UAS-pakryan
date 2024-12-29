
import React, { useState } from 'react';
import { View, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsActions';
import ProductCard from '../components/productCard';

const ProductList = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: Math.random().toString(),
        name: newProductName,
        price: newProductPrice,
      })
    );
    setNewProductName('');
    setNewProductPrice('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={newProductName}
        onChangeText={setNewProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={newProductPrice}
        onChangeText={setNewProductPrice}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8 },
});

export default ProductList;