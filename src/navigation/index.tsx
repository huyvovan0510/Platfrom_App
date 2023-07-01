import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import MiniAppScreen from '../screens/MiniApp';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MiniAppScreen" component={MiniAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
