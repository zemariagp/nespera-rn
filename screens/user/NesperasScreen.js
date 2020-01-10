import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button, List } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = (props) => {

  const nesperaData = props.nesperaData
  return (

    <TouchableOpacity onPress={() => { props.goToSingle(nesperaData) }}>
      <List.Item
        title={nesperaData.title}
        description={`by ${nesperaData.authorID}`}

      />
    </TouchableOpacity>
  )
}




const NesperasScreen = (props) => {

  const [nespera, setNespera] = useState([]);


  useEffect(() => {
    // Create an scoped async function in the hook
    function getUser() {
      fetch("https://nespera.herokuapp.com/api/top")
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setNespera(json)
        });
    };

    getUser();



  }, []);



  return (
    <View style={styles.container}>
      <Button mode="contained">AO CALHAS</Button>

      <Text>As mais respondidas</Text>
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
