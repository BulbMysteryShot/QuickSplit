import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import LoginSignup from './components/LoginSignup';

const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (
          <Stack.Navigator>
              <Stack.Screen
                  name="components/LoginSignup"
                  component={LoginSignup}
              />
          </Stack.Navigator>
  );
}
