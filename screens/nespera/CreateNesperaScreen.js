import React,{useState,useContext} from "react";
import { View, Text,StyleSheet } from "react-native";
import {TextInput,Button} from "react-native-paper";
import Firebase from "../../config/Firebase";
import { store } from '../../store/store';

const CreateNesperaScreen = (props) => {
 const [title, setTitle] = useState("");
 const [opA, setOpA] = useState("");
 const [opB, setOpB] = useState("");

 const user = useContext(store);
 
 const handleCreate = () =>{
  


  Firebase.database().ref('nesperas/').set({
    authorId: user.state.user,
    title: title,
    opA : opA,
    opB : opB,
    imageUrl : "http://picsum.photos/300/200.jpg",
  });
props.navigation.pop();
}

 

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título do Dilema" onChangeText={(text)=>setTitle(text)} />
      <Text>Preferias</Text>
      <TextInput placeholder="Ser o Nuno Markl." onChangeText={(text)=>setOpA(text)} />
      <Text>ou</Text>
      <TextInput key="asd" placeholder="Ser Anão" onChangeText={(text)=>setOpB(text)} />
      <Button onPress={()=>handleCreate()}>Criar</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    paddingHorizontal:30
  }
})

export default CreateNesperaScreen;
