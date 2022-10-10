import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import StoreList from './components/StoreList';
import store_data from './store_data.json';

const App = () => {
  const renderStore = ({item}) => <StoreList product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.banner_text}>PATIKASTORE</Text>
        <TextInput style={styles.search} placeholder={'Ara...'} />
        <FlatList data={store_data} renderItem={renderStore} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  banner_text: {
    color: '#800080',
    fontSize: 22,
    margin: 10,
  },
  search: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});

export default App;
