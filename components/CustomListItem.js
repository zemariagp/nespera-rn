
import React from "react";
import {StyleSheet} from "react-native";
import {  List } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = (props) => {

    const nesperaData = props.nesperaData
    return (
  
      <TouchableOpacity onPress={() => { props.goToSingle(nesperaData) }}>
        <List.Item style={styles.card}
          title={nesperaData.title}
          description={`por ${nesperaData.authorName}`}
  
        />
      </TouchableOpacity>
    )
  }
  const styles = StyleSheet.create({
    card: {
      backgroundColor:"lightgrey",
      marginVertical:5,
      borderRadius:10,
      
    }
  })
  
  
  export default CustomListItem;