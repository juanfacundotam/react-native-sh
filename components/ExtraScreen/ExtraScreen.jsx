import {
    Button,
  } from "react-native";

export const ExtraScreen = ({ navigation }) => {
    return (
      <>
        <Button
          title="Extra Navigate"
          onPress={() => navigation.navigate('Extra')}
        />
        <Button
          title="Extra Push"
          onPress={() => navigation.push('Extra')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
        <Button 
          title="Go Home passing parameter" 
          onPress={
            () => navigation.navigate('Home', {
              fromChild: "Hi, I am a param from ExtraScren"
            })
          } 
        />
      </>
    );
  };