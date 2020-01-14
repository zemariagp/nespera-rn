import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.goToSingle(props.nesperaData);
      }}
    >
      <List.Item
        style={styles.card}
        title={props.nesperaData.title}
        description={'por ' + props.nesperaData.authorName}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    borderRadius: 10
  }
});

export default CustomListItem;
