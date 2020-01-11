
      
      import React, { useEffect, useState,useContext } from 'react'
      import { View, Text, FlatList, StyleSheet } from 'react-native'
      import { Button, List } from "react-native-paper";
      import CustomListItem from "../../components/CustomListItem";
      import { store } from '../../store/store';

      
      
      
      const NesperasScreen = (props) => {
        const globalStore = useContext(store);
        const user = globalStore.state.user;
        console.log(user);

        const [nespera, setNespera] = useState([]);
      
      
        useEffect(() => {
          // Create an scoped async function in the hook
          function getUserNesperas() {
            fetch(`https://ironhack-wouldyourather.herokuapp.com/api/byauthor/${user}`)
              .then(function (response) {
                return response.json();
              })
              .then(function (json) {
                console.log(json);
                setNespera(json)
              });
          };
      
          getUserNesperas();
      
      
      
        }, []);
        
      
      
        return (
          <View style={styles.container}>
                  <Button onPress={()=>props.navigation.navigate("CreateNew")}>Criar Nova</Button>

      
           
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
      
      
      
      
  