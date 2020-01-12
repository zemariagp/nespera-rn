import React from 'react'
import { View, Share,StyleSheet } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack';
import { VictoryPie } from "victory-native";
import { Button} from "react-native-paper";



const StatsScreen = (props) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const stats = props.navigation.getParam("stats")
console.log(stats);
  return (
    <View style={styles.container}>
      <VictoryPie 
      colorScale={"qualitative"}
  /* data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]} */
  data={stats}
/>
<Button onPress={onShare} title="Share" >Partilhar</Button>
    </View>
  )
}

StatsScreen.navigationOptions = navData => {
  return {
    headerTitle: "Estatísticas",
    headerLeft:(<HeaderBackButton onPress={()=>navData.navigation.navigate("Nesperas")}/>)
  
  };
};
const styles = StyleSheet.create({
  container: {flex:1, justifyContent:"space-evenly"}
})


export default StatsScreen
