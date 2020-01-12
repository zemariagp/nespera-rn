import React,{useContext} from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import {store} from "../../store/store";

const ProfileScreen = props => {
  const globalState = useContext(store);
        const user = globalState.state["_55"];
        
  return (
    <View style={styles.container}>
      <Image source={{uri:user.profilePicUrl}} style={{width:200,height:200}}></Image>
<Text>{user.name}</Text>
<Text>{user.email}</Text>
<Text>{user.created_at}</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("EditUser");
        }}
      >
        Editar dados
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent:"center",flex:1,alignItems:"center"}
})


export default ProfileScreen;
