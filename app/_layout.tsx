import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (
          <Stack.Navigator>
              <Stack.Screen
                  name="components/HomeScreen"
                  component={HomeScreen}
              />
          </Stack.Navigator>
  );
}
