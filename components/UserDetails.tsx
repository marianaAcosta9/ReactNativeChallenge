import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { RootStackParamList } from "./navigationTypes";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const UserDetails = () => {
  return (
    <>
      <Text>Usuario</Text>
      <Text>Correo</Text>
    </>
  );
};
