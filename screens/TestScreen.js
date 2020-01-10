import React, { useContext, useState } from 'react';
import { store } from '../store/store';
import { View, StyleSheet, Image, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Firebase from "../config/Firebase";



const TestScreen = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;


  const [email, setEmail] = useState("");
  const handleEmailInput = (email) => {
    setEmail(email);
  }
  const [password, setPassword] = useState("");
  const handlePasswordInput = (password) => {
    setPassword(password);
  }

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({ type: 'firebase auth success', payload: res })
        //props.navigation.navigate
      })
      .catch(error => console.log(error))
  }



  return (
    <View style={styles.container}>
      <View style={styles.imgCont}><Image style={styles.imageBackground} source={{ uri: "https://vaiumaaposta.jellycast.com/files/UmaNesperaNoCu.jpg" }} /></View>


      <Text>Uma nêspera no cu.</Text>
      <TextInput label="email" onChangeText={handleEmailInput}></TextInput>
      <TextInput label="password" onChangeText={handlePasswordInput} secureTextEntry></TextInput>
      <Button mode="contained" onPress={() => {
        handleLogin();
      }}>LOGIN</Button>
      <View style={styles.buttonContainer}>

        <Text>or</Text>
        <Button onPress={() => props.navigation.navigate("Signup")} >SIGN UP</Button>
      </View>

    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 30


  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    flex: 1,
    width: 300, height: 300
  },
  imgCont: {
    borderRadius: 100,


    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center"

  }
})

export default TestScreen
