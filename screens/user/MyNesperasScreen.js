import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomListItem from '../../components/CustomListItem';
import { NESPERA_API_URL } from 'react-native-dotenv';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc';

const NesperasScreen = props => {
  const [top, setTop] = useState(null);

  const handleCreate = () => {
    props.navigation.navigate('Create');
  };

  useEffect(() => {
    // Create an scoped async function in the hook
    function getNesperas() {
      fetch(NESPERA_API_URL + '/Nesperas/author/asd')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
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
              props.navigation.navigate('Stats', {
                nesperaToShow: nesperaData,
                title: nesperaData.title
              })
            }
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={() => handleRandom()} mode="contained">
          CRIAR DILEMA
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
