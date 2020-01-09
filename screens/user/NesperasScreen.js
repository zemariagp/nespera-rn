import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { NESPERAS } from "../../data/dummy-data";
import { Button, List } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomListItem = (props) => (
  <TouchableOpacity onPress={() => { props.goToSingle() }}>
    <List.Item
      title={props.title}
      description={`by ${props.author}`}
      right={() => <Text>{props.answers}</Text>}
    />
  </TouchableOpacity>
)


const NesperasScreen = (props) => {
  return (
    <View>
      <Button mode="contained">AO CALHAS</Button>

      <Text>As mais respondidas</Text>
      <FlatList data={NESPERAS}
        renderItem={(itemData) =>
          <CustomListItem title={itemData.item.title}
            author={itemData.item.authorId} answers={itemData.item.answers.toString()}
            goToSingle={() => { props.navigation.navigate({ routeName: "Single" }); }} />} />
    </View>
  )
}

export default NesperasScreen
