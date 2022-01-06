import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConnectMetamask from './components/ConnectMetamask'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' >
        <Stack.Screen name='HomeScreen' options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name='ProfileScreen' options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name='ConnectMetamask' options={{ headerShown: false }} component={ConnectMetamask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}