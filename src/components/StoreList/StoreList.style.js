import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
  },
  Image: {
    height: Dimensions.get('window').height / 4,
    margin: 10,
    borderRadius: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 0,
  },
  price: {
    margin: 10,
  },
  inStock: {
    fontSize: 18,
    color: 'red',
    margin: 10,
  },
});
