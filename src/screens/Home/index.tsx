import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Platform App</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MiniAppScreen', 'Data pass from Platform app');
        }}>
        <Text> Open mini App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
