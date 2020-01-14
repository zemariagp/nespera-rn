import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomListItem from '../../components/CustomListItem';
import { NESPERA_API_URL } from 'react-native-dotenv';
import useDataApi from 'use-data-api';

const NesperasScreen = props => {
  const [nespera, setNespera] = useState(null);
  const [top, setTop] = useState(null);

  const handleRandom = () => {
    // props.navigation.navigate('Single', { nesperaToShow: top[0] });
  };

  const [{ data, isLoading, isError }, doFetch] = useDataApi(NESPERA_API_URL + '/Nesperas', []);

  doFetch(NESPERA_API_URL + '/Nesperas');

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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

export default NesperasScreen;
