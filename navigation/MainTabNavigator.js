import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";

import NesperasScreen from "../screens/user/NesperasScreen";
import SingleNesperaScreen from "../screens/nespera/SingleNesperaScreen";
import StatsScreen from "../screens/nespera/StatsScreen";

import MyNesperasScreen from "../screens/user/MyNesperasScreen";
import CreateNesperaScreen from "../screens/nespera/CreateNesperaScreen";

import ProfileScreen from "../screens/user/ProfileScreen";
import EditUserInfoScreen from "../screens/user/EditUserInfoScreen";

import EpisodesScreen from "../screens/EpisodesScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const NesperasStack = createStackNavigator(
  {
    Nesperas: {screen:NesperasScreen,navigationOptions:{headerTitle:"As mais respondidas.",headerTitleStyle:{fontFamily:"lora"}}},
    Single: SingleNesperaScreen,
    Stats: StatsScreen
  },
  config
);

NesperasStack.navigationOptions = {
  
  tabBarLabel: "Nêsperas",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-globe${focused ? "" : "-outline"}`
          : "md-globe"
      }
    />
  )
};

NesperasStack.path = "";

const MyNesperasStack = createStackNavigator(
  {
    MyNesperas: {screen:MyNesperasScreen,navigationOptions:{headerTitle:"As minhas nêsperas.",headerTitleStyle:{fontFamily:"lora"}}},
    CreateNew:CreateNesperaScreen
  },
  config
);

MyNesperasStack.navigationOptions = {
  tabBarLabel: "As Minhas",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-shirt" : "md-shirt"}
    />
  )
};

MyNesperasStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: {screen:ProfileScreen,navigationOptions:{headerTitle:"O meu perfil.",headerTitleStyle:{fontFamily:"lora"}}},
    EditUser: EditUserInfoScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Perfil",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

ProfileStack.path = "";

EpisodesScreen.navigationOptions = {
  tabBarLabel: "Episódios",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "logo-youtube" : "logo-youtube"}
    />
  )
};

EpisodesScreen.path = "";


const tabNavigator = createBottomTabNavigator({
  NesperasStack,
  MyNesperasStack,
  EpisodesScreen,
  ProfileStack
});

tabNavigator.path = "";
tabNavigator.navigationOptions = {}
export default tabNavigator;
