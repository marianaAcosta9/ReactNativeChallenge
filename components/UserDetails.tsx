import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "./navigationTypes";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 100,
  },
  avatarContainer: {
    width: 150,
    height: 150,
    backgroundColor: "lightgray",
    borderRadius: 75,
    borderWidth: 10,
    borderColor: "lightgray",
    marginBottom: 16,
    alignContent: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    position: "absolute",
    left: 0,
    top: 0,
  },
  name: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "700",
  },
  email: {
    fontSize: 18,
    color: "gray",
    fontStyle: "italic",
  },
  loadingIndicator: {
    paddingTop: 60,
  },
});

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type APIResponse = {
  data: User;
};

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const UserDetails = ({ route }: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${route.params.userId}`).then(
      async (response) => {
        const { data } = (await response.json()) as APIResponse;
        setUser(data);
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <View style={styles.avatarContainer}>
            <ActivityIndicator size="large" />
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          </View>
          <Text style={styles.name}>
            {user.first_name} {user.last_name}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
        </>
      ) : (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      )}
    </View>
  );
};
