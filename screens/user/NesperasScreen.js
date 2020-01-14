import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomListItem from '../../components/CustomListItem';
import { NESPERA_API_URL } from 'react-native-dotenv';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc';

const NesperasScreen = props => {
  const [nespera, setNespera] = useState(null);
  const [top, setTop] = useState(null);

  const handleRandom = () => {
    props.navigation.navigate('Single', { nesperaToShow: top[0] });
  };

  useEffect(() => {
    // Create an scoped async function in the hook
    function getNesperas() {
      fetch(NESPERA_API_URL + '/Nesperas')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          setNespera(json);
          const allNesperas = json;
          setTop(allNesperas['resData']);
        });
    }
    getNesperas();
  }, [props.isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        data={top}
        keyExtractor={item => item['_id'].toString()}
        renderItem={itemData => (
          <CustomListItem
            nesperaData={itemData.item}
            goToSingle={nesperaData =>
              props.navigation.navigate('Single', {
                nesperaToShow: nesperaData,
                title: nesperaData.title
              })
            }
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={() => handleRandom()} mode="contained">
          UM AO CALHAS
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center' }
});

export default withNavigationFocus(NesperasScreen);
