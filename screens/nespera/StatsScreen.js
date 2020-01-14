import React, { useEffect } from 'react';
import { View, Share, StyleSheet } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import { VictoryPie } from 'victory-native';
import { Button } from 'react-native-paper';
import { NESPERA_API_URL } from 'react-native-dotenv';
const StatsScreen = props => {
  /*  useEffect(() => {
    function getNesperas() {
      fetch(NESPERA_API_URL + '/Nesperas/')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          const allNesperas = json;
          setTop(allNesperas['resData']);
        });
    }
    getNesperas();
  }, []); */

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React'
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

  return (
    <View style={styles.container}>
      <VictoryPie
        colorScale={'qualitative'}
        data={[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 40 },
          { x: 'Birds', y: 55 }
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
