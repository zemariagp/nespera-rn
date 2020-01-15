import React, { useState, useEffect } from 'react';
import { View, Share, StyleSheet } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import { VictoryPie } from 'victory-native';
import { Button } from 'react-native-paper';
import { NESPERA_API_URL } from 'react-native-dotenv';

const StatsScreen = props => {
  const nesperaData = props.navigation.getParam('nesperaToShow');
  const [nespera, setNespera] = useState({});

  useEffect(() => {
    function getNesperas() {
      fetch(NESPERA_API_URL + '/Nesperas/' + nesperaData['_id'])
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          const allNesperas = json;
          setNespera(allNesperas.resData[0]);
        });
    }
    getNesperas();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Preferias',
        message: nesperaData['optionA'] + ' ou ' + nesperaData['optionB'] + '?'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const random1 = Math.floor(Math.random() * 20);
  const random2 = Math.floor(Math.random() * 20);
  return (
    <View style={styles.container}>
      <VictoryPie
        colorScale={'qualitative'}
        data={[
          { x: nespera.optionA, y: random1 },
          { x: nespera.optionB, y: random2 }
        ]}
      />
      <Button onPress={onShare} title="Share">
        Partilhar
      </Button>
    </View>
  );
};

StatsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Estatísticas',
    headerLeft: <HeaderBackButton onPress={() => navData.navigation.navigate('Nesperas')} />
  };
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-evenly' }
});

export default StatsScreen;
