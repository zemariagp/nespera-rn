import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-paper"
const SingleNesperaScreen = (props) => {
  return (
    <View>
      <Text>Preferias</Text>
      <Button onPress={() => { props.navigation.navigate("Stats") }}>Opção A</Button>
      <Text>ou</Text>
      <Button>Opção B</Button>
    </View>
  )
}

export default SingleNesperaScreen
