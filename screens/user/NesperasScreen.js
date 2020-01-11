
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";
import CustomListItem from "../../components/CustomListItem";
import {NESPERA_API_URL} from 'react-native-dotenv';



const NesperasScreen = (props) => {

  const [nespera, setNespera] = useState(null);


  useEffect(() => {
    // Create an scoped async function in the hook
    function getTop() {
      fetch(NESPERA_API_URL+"/nesperas")
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setNespera(json);

        });
    };
    getNesperas();

    console.log(nespera);
    // Execute the created function directly

  }, []);

  return (
    <View style={styles.container}> 

      <Text style={ { fontFamily: 'lora',fontSize:30 } } >As mais respondidas</Text>     
       <FlatList data={nespera} 
        renderItem={(itemData) =>
          <CustomListItem nesperaData={itemData.item}
            goToSingle={
              (nesperaData) => props.navigation.navigate("Single", { nesperaToShow: nesperaData })} />} />
      <Button mode="contained">UMA AO CALHAS</Button>







    </View>
  );
};
const styles = StyleSheet.create({

  container: { 
   marginTop:40,
    paddingHorizontal: 30 }
})



export default NesperasScreen

