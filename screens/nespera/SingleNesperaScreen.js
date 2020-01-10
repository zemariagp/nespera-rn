import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-paper"
const SingleNesperaScreen = (props) => {
  const nesperaData = props.navigation.getParam("nesperaToShow")
  return (
    <View>
      <Text>Preferias</Text>
      <Button onPress={() => { props.navigation.navigate("Stats") }}>{nesperaData.optionA}</Button>
      <Text>ou</Text>
      <Button onPress={() => { props.navigation.navigate("Stats") }}>{nesperaData.optionB}</Button>
    </View>
  )
}

export default SingleNesperaScreen
