import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Button,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  return (


    // <View style={styles.container}>
    //   <Image source={require('./assets/favicon.png')}/>
    //   <Text>SML APP</Text>
    //   <TextInput
    //     placeholder='Escribe tu nombre'
    //     onChangeText={text => setText(text)}
    //     defaultValue={text}
    //   />
    //   <StatusBar style="auto" />
    // </View>


    // <ScrollView>
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    //   <Text
    //   style={{margin: 20}}
    //   >Avatar</Text>
    //   <Image
    //     source={{ uri: 'https://i.pravatar.cc/500' }}
    //     style={{ width: 500, height: 500 }}
    //   />
    // </ScrollView>


    // <FlatList
    //   data={[
    //     {key: "avatar", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar2", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar3", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar4", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar5", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar6", img: 'https://i.pravatar.cc/500'},
    //     {key: "avatar7", img: 'https://i.pravatar.cc/500'},
    //   ]}
    //   renderItem={({item}) =>
    //     <>
    //     <Text>{item.key}</Text>
    //     {/* <Image source={item.img}/></Image> // en caso de que sea una imagen local */}
    //     <Image source={{ uri: item.img }}
    //     style={{ width: 500, height: 500 }}/>
    //     </>
    //   }
    // />


    // <SectionList
    //   sections={[
    //     {
    //       title: "Empleados",
    //       data: [
    //         { key: "avatar", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar2", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar3", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar4", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar5", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar6", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar7", img: "https://i.pravatar.cc/500" },
    //       ],
    //     },
    //     {
    //       title: "Clientes",
    //       data: [
    //         { key: "avatar", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar2", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar3", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar4", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar5", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar6", img: "https://i.pravatar.cc/500" },
    //         { key: "avatar7", img: "https://i.pravatar.cc/500" },
    //       ],
    //     },
    //   ]}
    //   renderItem={({ item }) => (
    //     <>
    //       <Text>{item.key}</Text>
    //       {/* <Image source={item.img}/></Image> // en caso de que sea una imagen local */}
    //       <Image
    //         source={{ uri: item.img }}
    //         style={{ width: 500, height: 500 }}
    //       />
    //     </>
    //   )}
    //   renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    //   keyExtractor={(item, index) => index}
    // />


    // <ScrollView>
    //   <View style={{width:500, height:500, backgroundColor: 'green'}}></View>
    //   <View style={{width:500, height:500, backgroundColor: 'red'}}></View>
    //   <View style={{width:500, height:500, backgroundColor: 'yellow'}}></View>
    //   <View style={{width:500, height:500, backgroundColor: 'brown'}}></View>
    // </ScrollView>

    // <View
    // style={{flex:1, alignItems: "center", justifyContent: "center" }}>
    //   <Button
    //   onPress={()=> {
    //     alert('Thanos snaped his fingers')
    //   }}
    //   title="login"
    //   />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
  },
});
