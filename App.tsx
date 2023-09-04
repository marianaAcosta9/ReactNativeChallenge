import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
