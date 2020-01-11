import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";
import CustomListItem from "../../components/CustomListItem";




const NesperasScreen = (props) => {

  const [nespera, setNespera] = useState(null);


  useEffect(() => {
    // Create an scoped async function in the hook
    function getTop() {
      fetch("https://ironhack-wouldyourather.herokuapp.com/api/top")
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setNespera(json);
        });
    };

    getTop();



  }, []);



  return (
    <View style={styles.container}>
      <Button mode="contained">AO CALHAS</Button>

      <Text>Virais</Text>
      <FlatList data={nespera} keyExtractor={(el) => el["_id"]}
        renderItem={(itemData) =>
          <CustomListItem nesperaData={itemData.item}
            goToSingle={
              (nesperaData) => props.navigation.navigate("Single", { nesperaToShow: nesperaData })} />} />






    </View>
  )
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 30 }
})


export default NesperasScreen
