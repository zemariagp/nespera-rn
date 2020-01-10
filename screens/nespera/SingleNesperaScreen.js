import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
const SingleNesperaScreen = props => {
  const nespera = props.navigation.getParam("data");
  console.log(props.navigation.getParam("data"));

  return (
    <View>
      <Text>{nespera.title}</Text>
      <Text>Preferias</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Stats");
        }}
      >
        {nespera.opA}
      </Button>
      <Text>ou</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Stats");
        }}
      >
        {nespera.opB}
      </Button>
    </View>
  );
};

SingleNesperaScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("title")
  };
};

export default SingleNesperaScreen;
