import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Room, Game ,Config} from './screens';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerTintColor: '#b7a400',
          headerStyle: {
            backgroundColor: '#161718',
          },
          contentStyle: {
            backgroundColor: '#161718',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name='Config' component={Config} options={{ headerShown: false }} />
        <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
