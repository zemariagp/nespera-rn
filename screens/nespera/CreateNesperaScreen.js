import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { store } from '../../store/store';

import { NESPERA_API_URL } from 'react-native-dotenv';

const CreateNesperaScreen = props => {
  const [title, setTitle] = useState('');
  const [opA, setOpA] = useState('');
  const [opB, setOpB] = useState('');

  const globalState = useContext(store);
  const user = globalState.state['_55'].data;

  const handleCreate = async () => {
    const response = await fetch(NESPERA_API_URL + '/Nesperas/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        optionA: opA,
        optionB: opB,
        title: title,
        authorId: user['_id'],
        votedForA: 0,
        votedForB: 0,
        pictureUrl: 'http://picsum.photos/350/200',
        authorName: 'asd'
      })
    });
    const resData = await response.json();

    props.navigation.pop();
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput placeholder="Título do Dilema" onChangeText={text => setTitle(text)} />
      <Text>Preferias</Text>
      <TextInput placeholder="Ser o Nuno Markl." onChangeText={text => setOpA(text)} />
      <Text>ou</Text>
      <TextInput key="asd" placeholder="Ser Anão" onChangeText={text => setOpB(text)} />
      <Button onPress={() => handleCreate()}>Criar</Button>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  }
});

export default CreateNesperaScreen;
