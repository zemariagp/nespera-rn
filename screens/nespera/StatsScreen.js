import React from 'react'
import { View, Text } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack';
import { VictoryPie } from "victory-native";

const StatsScreen = (props) => {
  const stats = props.navigation.getParam("stats")
console.log(stats);
  return (
    <View>
      <VictoryPie 
      colorScale={"qualitative"}
  /* data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]} */
  data={stats}
/>
  
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
