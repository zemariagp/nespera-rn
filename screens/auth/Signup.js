import React, { useContext, useState } from 'react';
import { store } from '../../store/store';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Firebase from '../../config/Firebase';

const TestScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [email, setEmail] = useState('');
  const handleEmailInput = email => {
    setEmail(email);
  };
  const [password, setPassword] = useState('');
  const handlePasswordInput = password => {
    setPassword(password);
  };

  const [name, setName] = useState('');
  const handleNameInput = name => {
    setName(name);
  };

  const handleSignup = () => {
    setIsLoading(true);

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: 'firebase signup success', payload: { name: name, email: email } });
        setIsLoading(false);

        props.navigation.navigate('Main');
      })
      .catch(error => console.log(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput label="name" onChangeText={handleNameInput}></TextInput>
      <TextInput
        label="email"
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        onChangeText={handleEmailInput}
      ></TextInput>
      <TextInput label="password" onChangeText={handlePasswordInput} secureTextEntry></TextInput>
      <Button
        loading={isLoading}
        mode="contained"
        onPress={() => {
          handleSignup();
        }}
      >
        SIGN UP
      </Button>
      <View style={styles.buttonContainer}>
        <Text>or</Text>
        <Button onPress={() => props.navigation.navigate('Login')}>LOGIN</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TestScreen;
