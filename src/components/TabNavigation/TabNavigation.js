import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator(){

    const hello = () => {
        <View>
            <Text>
                Hello
            </Text>
        </View>
    }

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: colors.tabIndicator, },
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarStyle: { elevation: 1 },
      }}
    >
      <Tab.Screen name="About" component={hello} />
      <Tab.Screen name="Base Stats" component={hello} />
      <Tab.Screen name="Evolution" component={hello} />
      <Tab.Screen name="Moves" component={hello} />
    </Tab.Navigator>
  )
}