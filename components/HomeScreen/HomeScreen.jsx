import React from 'react'
import {
    Text,
    View,
    Button,
  } from "react-native";


  export const HomeScreen = ({ navigation, route }) => {
    return (
      <View>
        <Button
          title="Black Widow"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Black Widow' })
          }
        />
        <Button
          title="Black Panther"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Black Panther' })
          }
        />
        <Button
          title="Extra"
          onPress={() =>
            navigation.navigate('Extra')
          }
        />
        <Text>{route.params?.fromChild || "Param not provided yet"}</Text>
      </View>
    );
  };