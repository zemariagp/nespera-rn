import React, { useContext, useState } from 'react';
import { store } from '../../store/store';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
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

  const handleLogin = () => {
    setIsLoading(true);

    Firebase.auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then(res => {
        dispatch({ type: 'firebase login success', payload: email });
        setIsLoading(false);
        props.navigation.navigate('Main');
      })
      .catch(error => console.log(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.headerCont}>
        <Image
          style={styles.image}
          source={{ uri: 'https://vaiumaaposta.jellycast.com/files/UmaNesperaNoCu.jpg' }}
        />

        <Text style={{ fontFamily: 'lora', fontSize: 30 }}>Uma nêspera no cu.</Text>
        <Text>Aplicativo para maiores de 18 anos.</Text>
      </View>
      <View>
        <TextInput
          label="email"
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          onChangeText={handleEmailInput}
        ></TextInput>
        <TextInput label="password" onChangeText={handlePasswordInput} secureTextEntry></TextInput>
        <Button
          mode="contained"
          loading={isLoading}
          onPress={() => {
            handleLogin();
          }}
        >
          LOGIN
        </Button>
        <View style={styles.buttonContainer}>
          <Text>ou</Text>
          <Button onPress={() => props.navigation.navigate('Signup')}>SIGN UP</Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  headerCont: {
    alignItems: 'center'
  }
});

export default TestScreen;
