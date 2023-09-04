import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { RootStackParamList } from "./navigationTypes";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const UserList = ({ navigation }: Props) => {
  return (
    <>
      <Text>Nombre</Text>
      <Text>Apellido</Text>
      <Button
        onPress={() => navigation.navigate("Details", { userId: 1 })}
        title="Detalles"
      />
    </>
  );
};
