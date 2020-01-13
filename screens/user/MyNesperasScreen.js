

import React, { useEffect, useState, useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button, List } from "react-native-paper";
import CustomListItem from "../../components/CustomListItem";
import { store } from '../../store/store';
import { NESPERA_API_URL } from 'react-native-dotenv';




const NesperasScreen = (props) => {
  const globalState = useContext(store);
  const user = globalState.state["_55"];

  console.log("assssd", user);


  const [nespera, setNespera] = useState([]);
  function getUserNesperas() {
    fetch(NESPERA_API_URL + "/Nesperas?authorId=" + (parseInt(user["id"])).toString()).then(function (response) {
      console.log(response.body);
      return response.json();
    })
      .then(function (json) {
        console.log(json);
        setNespera(json)
      });
  };

  useEffect(() => {
    // Create an scoped async function in the hook


    getUserNesperas();



  }, []);

  if (nespera.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Ainda não criaste nenhum dilema.</Text>
        <Button mode="contained" onPress={() => props.navigation.navigate("CreateNew")}>Criar Novo</Button>





      </View>
    )
  }
  else return (
    <View style={styles.container}>
      <FlatList data={nespera} keyExtractor={(el) => el["id"].toString()}
        renderItem={(itemData) =>
          <CustomListItem nesperaData={itemData.item}
            goToSingle={
              (nesperaData) => props.navigation.navigate("Single", { nesperaToShow: nesperaData, title: nesperaData.title })} />} />

      <Button mode="contained" onPress={() => props.navigation.navigate("CreateNew")}>Criar Novo</Button>

    </View>

  )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: "space-evenly", alignItems: "center" }
})


export default NesperasScreen




