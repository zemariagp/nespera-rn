import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const ProfileScreen = props => {
  return (
    <View>
      <Text>Perfil</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("EditUser");
        }}
      >
        Editar dados
      </Button>
      <Text>user stats</Text>
    </View>
  );
};

export default ProfileScreen;
