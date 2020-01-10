import React,{useEffect,useState} from 'react'
import { View, Text, FlatList,StyleSheet } from 'react-native'
import { Button, List } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Firebase from "../../config/Firebase";

const CustomListItem = (props) => (
  <TouchableOpacity onPress={() => { props.goToSingle() }}>
    <List.Item
      title={props.title}
      description={`by ${props.author}`}
      right={() => <Text>{props.answers}</Text>}
    />
  </TouchableOpacity>
)




const NesperasScreen = (props) => {
  const [nespera,setNespera] = useState(null);
  
  const getNesperasFromDatabase =()=>{
    Firebase.database().ref('nesperas/').once("value").then(function(data) {
      setNespera(data);
      // let arr = [...data];
      
      console.log(data);
    });
  }

useEffect(()=>getNesperasFromDatabase(),[]);
  return (
    <View style={styles.container}>
      <Button mode="contained">AO CALHAS</Button>

      <Text>As mais respondidas</Text>
      <FlatList data={nespera}
        renderItem={(itemData) =>
          <CustomListItem title={itemData.item.title}
            author={itemData.item.authorId} answers={itemData.item.answers.toString()}
            goToSingle={() => { props.navigation.navigate({ routeName: "Single" }); }} />} />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{paddingHorizontal:30}
})


export default NesperasScreen
