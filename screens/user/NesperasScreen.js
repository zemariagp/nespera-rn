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
  
   const [nespera,setNespera] = useState([]);
  
   
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const y = await Firebase.database().ref('nesperas').once("value").then(function(data) {return data})
      
      let final = [];
      for (const key in y) {
        console.log(y[key]);
        final.push(y[key]);
      }
      
      console.log("asd",final)
    setNespera(final);
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);
 
    

  return (
    <View style={styles.container}>
      <Button mode="contained">AO CALHAS</Button>

      <Text>As mais respondidas</Text>
      <FlatList data={nespera}
        renderItem={(itemData) =>
          <CustomListItem title={itemData.item.title}
            authorId={itemData.authorId}
            goToSingle={() => { props.navigation.navigate({ routeName: "Single" }); }} />} />


      
      
   
    
    </View>
  )
}
const styles = StyleSheet.create({
  container:{paddingHorizontal:30}
})


export default NesperasScreen
