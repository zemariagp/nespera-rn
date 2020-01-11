import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-paper";
import {NESPERA_API_URL} from 'react-native-dotenv';


// may be a good idea to useEffect here
const SingleNesperaScreen = (props) => {
  const nesperaData = props.navigation.getParam("nesperaToShow")
  console.log(nesperaData);

  
  const handleVote = async (option) => {
    const response = await fetch(NESPERA_API_URL+"/Nesperas/"+nesperaData.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
       
        votedForA:option==="a"?nesperaData.votedForA+1:nesperaData.votedForA,
        votedForB:option==="b"?nesperaData.votedForB+1:nesperaData.votedForB,
        
       })})
      const resData = await response.json();
      console.log(resData);
      props.navigation.push("Stats");
      } 
    

  return (
    <View>
      <Text>Preferias</Text>
      <Button onPress={() => { handleVote("a") }}>{nesperaData.optionA}</Button>
      <Text>ou</Text>
      <Button onPress={() => { handleVote("b") }}>{nesperaData.optionB}</Button>

    </View>
  );
};

SingleNesperaScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("title")
  };
};

export default SingleNesperaScreen;
