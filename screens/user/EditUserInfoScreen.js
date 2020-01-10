import React from "react";
import { View, Text, TextInput } from "react-native";

const EditUserInfoScreen = () => {
  return (
    <View>
      <Text>Edita os teus dados</Text>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="password" />
      <TextInput placeholder="email" />
    </View>
  );
};

export default EditUserInfoScreen;
