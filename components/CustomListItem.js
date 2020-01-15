import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = props => {
  function getHash(input) {
    var hash = 0,
      len = input.length;
    for (var i = 0; i < len; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
  }
  function colorFromTitle() {
    const yellow200 = '#FFF59D';
    const deepOrange600 = '#F4511E';
    const lime300 = '#DCE775';
    const lightGreen500 = '#8BC34A';
    const teal700 = '#00796B';
    const cyan900 = '#006064';
    const colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
    return colors[(getHash(props.nesperaData.title) % colors.length) - 1];
  }
  const [color, setColor] = useState('grey');
  useEffect(() => {
    setColor(colorFromTitle());
  }, []);
  return (
    <TouchableOpacity
      onPress={() => {
        props.goToSingle(props.nesperaData);
      }}
    >
      <List.Item
        titleStyle={styles.cardTitle}
        style={{ ...styles.card, backgroundColor: color }}
        title={props.nesperaData.title}
        description={'por ' + props.nesperaData.authorName}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    borderRadius: 10,
    elevation: 5
  },
  cardTitle: { fontSize: 25, fontFamily: 'lora', color: 'white' }
});

export default CustomListItem;
