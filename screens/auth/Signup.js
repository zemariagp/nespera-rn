
import React, { useContext, useState } from 'react';
import { store } from '../../store/store';
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Firebase from "../../config/Firebase";



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

  const [name, setName] = useState("");
  const handleNameInput = (name) => {
    setName(name);
  }

  const handleLogin = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({ type: 'firebase auth success', payload: res })
        props.navigation.navigate("Main");
      })
      .catch(error => console.log(error))
  }



  return (
    <View style={styles.container}>

      <TextInput label="name" onChangeText={handleNameInput}></TextInput>
      <TextInput label="email" onChangeText={handleEmailInput}></TextInput>
      <TextInput label="password" onChangeText={handlePasswordInput} secureTextEntry></TextInput>
      <Button mode="contained" onPress={() => {
        handleLogin();
      }}>SIGN UP</Button>
      <View style={styles.buttonContainer}>

        <Text>or</Text>
        <Button onPress={() => props.navigation.navigate("Login")}>LOGIN</Button>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default TestScreen
