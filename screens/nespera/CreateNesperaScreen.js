import React from "react";
import { View, Text, TextInput } from "react-native";

const CreateNesperaScreen = () => {
  return (
    <View>
      <Text>Cria a tua própria Nespera!</Text>
      <TextInput placeholder="Título" />
      <TextInput placeholder="Primeira Opção" />
      <TextInput placeholder="Segunda Opção" />
    </View>
  );
};

export default CreateNesperaScreen;
