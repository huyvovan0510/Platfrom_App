import {Federated} from '@callstack/repack/client';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const MiniAppNavigator = React.lazy(props => {
  console.log("\x1b[35;1m' ~ file: index.tsx:7 ~ props:", props);
  return Federated.importModule('MiniApp', './MiniAppContainer');
});

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="red" size="large" />
  </View>
);

const MiniAppScreen = () => {
  const useRouter = useRoute();

  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <MiniAppNavigator data={useRouter?.params} />
    </React.Suspense>
  );
};

export default MiniAppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
