import React from 'react'
import { View, Text } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack';

const StatsScreen = (props) => {
  return (
    <View>
      <Text>Stats</Text>
      <Text>Share</Text>
      <Text>Responder a outra</Text>
    </View>
  )
}

StatsScreen.navigationOptions = navData => {
  return {
    headerTitle: "Estatísticas",
    headerLeft:(<HeaderBackButton onPress={()=>navData.navigation.navigate("Nesperas")}/>)
  
  };
};


export default StatsScreen
