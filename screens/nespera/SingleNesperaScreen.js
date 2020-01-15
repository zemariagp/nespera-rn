import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { NESPERA_API_URL } from 'react-native-dotenv';
import { TouchableOpacity } from 'react-native-gesture-handler';

// may be a good idea to useEffect here
const SingleNesperaScreen = props => {
  const nesperaData = props.navigation.getParam('nesperaToShow');

  const handleVote = async option => {
    const response = await fetch(
      NESPERA_API_URL + '/Nesperas/vote/' + nesperaData._id + '/' + option,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {}
      }
    );
    const resData = await response.json();
    props.navigation.push('Stats', { nesperaToShow: nesperaData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.preferias}>Preferias</Text>

      <TouchableOpacity
        onPress={() => {
          handleVote('a');
        }}
      >
        <Text style={styles.button}>{nesperaData.optionA}</Text>
      </TouchableOpacity>

      <Text style={styles.preferias}>ou</Text>

      <TouchableOpacity
        onPress={() => {
          handleVote('b');
        }}
      >
        <Text style={styles.button}>{nesperaData.optionB}</Text>
      </TouchableOpacity>

      <Text style={styles.author}>por {nesperaData.authorName}</Text>
    </View>
  );
};

SingleNesperaScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('title')
  };
};

const styles = StyleSheet.create({
  container: { padding: 30, flex: 1, justifyContent: 'space-between' },
  preferias: { fontFamily: 'lora', fontSize: 40, textAlign: 'center' },
  author: { fontFamily: 'lora', fontSize: 26, textAlign: 'right' },
  button: {
    color: '#d16234',
    textAlign: 'center',
    fontSize: 20
  }
});

export default SingleNesperaScreen;
