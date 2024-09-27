import React from "react";
import { Image,View,Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PokeDex from "./src/pages/PokeDex";
import Detail from "./src/pages/Detail";
import Home from "./src/pages/Home";


const App = () => {

  const PokeballIcon = () => (
    <Image
      source={require('./assets/poke_ball_icon.svg')}
      style={{ height: 35, width: 35, resizeMode: 'contain',}}
    />
  );

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="PokeDexScreen"
          component={PokeDex}
          options={{
            headerShown: true,
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{  fontSize:22,fontWeight:'bold', fontFamily:'sans-serif', color:'white', marginRight:10}}>Pokedex</Text>
                <PokeballIcon />
              </View>
            ),
            headerStyle:{
              backgroundColor:'#F64233'
            },
            headerTintColor:'white',
            headerTitleStyle:{
              fontSize:22,
              fontWeight:'bold',
              fontFamily:'sans-serif',

            }
          }} />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: '',
            headerStyle: { backgroundColor: 'white', },
            headerTitleStyle: { color: 'white' },
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

/*

 <Stack.Screen
          name="HomeScreen"
          component={Home}
          title='Home'
          options={{
            headerShown: false
          }} />

*/