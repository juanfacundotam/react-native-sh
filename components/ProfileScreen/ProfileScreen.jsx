import React from "react";
import {
  Text,
} from "react-native";

export const ProfileScreen = ({ route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };