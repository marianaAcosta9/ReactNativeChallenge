import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserList } from "./components/UserList";
import { UserDetails } from "./components/UserDetails";
import { RootStackParamList } from "./components/navigationTypes";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={UserList} />
        <Screen name="Details" component={UserDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
