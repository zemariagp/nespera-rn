import React, { Component } from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import {WebView} from "react-native-webview"
import { ScrollView } from 'react-native-gesture-handler';
// You can import from local files

// or any pure javascript modules available in npm

export default class App extends Component {
  render() {
if (Platform.OS==="ios") {
    return <View style={styles.paragraph}>
        <Text>Android only for now</Text>
    </View>
}


    return (

<WebView
        style={styles.container}
        javaScriptEnabled={true}
        source={{
          uri: 'https://m.youtube.com/channel/UCt_fuy0XSQcOUNvXPT682lw/videos',
        }}
      />




        
    );
  }
}

const styles = StyleSheet.create({
  container: {
  marginTop:20
  },
  paragraph: {
   flex:1,
   justifyContent:"center",
   alignItems:"center"
  },
});
