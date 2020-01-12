import React from "react";
import { View, Text } from "react-native";
onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
const StatsScreen = () => {
  return (
    <View>
      <Text>user stats</Text>
    </View>
  );
};

export default StatsScreen;
