import React from 'react';
import {View, Image, Text, Button, FlatList} from 'react-native';
import styles from './StoreList.style';
import store_data from '../../store_data.json';

const StoreList = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        resizeMode={'cover'}
        source={{uri: product.imgURL}}
      />
      <Text style={styles.Title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {product.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
    </View>
  );
};

export default StoreList;
