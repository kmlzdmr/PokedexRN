import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PokeDex from "./src/pages/PokeDex";
import Detail from "./src/pages/Detail";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="PokeDexScreen" 
        component={PokeDex}
        title='PokeDex'
        options={{
          headerShown:false
          }}/>
        <Stack.Screen 
        name="DetailScreen" 
        component={Detail} 
        options={{
          title:'',
          headerStyle:{backgroundColor:'white',},
          headerTitleStyle:{color:'white'},
          }}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;