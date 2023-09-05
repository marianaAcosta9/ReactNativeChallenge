import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "./navigationTypes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  itemText: {
    padding: 20,
    fontSize: 18,
  },
});

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

type APIResponse = {
  data: User[];
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const UserList = ({ navigation }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users").then(async (response) => {
      const { data } = (await response.json()) as APIResponse;
      setUsers(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { userId: item.id })
              }
            >
              <Text style={styles.itemText}>
                {item.first_name} {item.last_name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
