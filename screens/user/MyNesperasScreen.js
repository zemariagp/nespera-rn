import React from 'react'
import { View, Text,Button } from 'react-native'

const MyNesperasScreen = (props) => {
  return (
    <View>
      <Text>My Nesperas</Text>
      <Button title="Criar nova" onPress={()=>props.navigation.navigate("CreateNew")}/>
    </View>
  )
}

export default MyNesperasScreen
