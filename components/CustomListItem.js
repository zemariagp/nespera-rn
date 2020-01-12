
import React from "react";
import {  List } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = (props) => {

    const nesperaData = props.nesperaData
    return (
  
      <TouchableOpacity onPress={() => { props.goToSingle(nesperaData) }}>
        <List.Item
          title={nesperaData.title}
          description={`by ${nesperaData.authorName}`}
  
        />
      </TouchableOpacity>
    )
  }
  
  export default CustomListItem;