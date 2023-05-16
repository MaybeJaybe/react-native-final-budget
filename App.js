import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import Budget from './Budget';
import History from './History';
import Savings from './Savings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000', color: '#fff'}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Budget') {
                iconName = focused ? 'card-outline' : 'card';
              } else if (route.name === 'Savings') {
                iconName = focused ? 'cash-outline' : 'cash';
              } else if (route.name === 'History') {
                iconName = focused ? 'alarm-outline' : 'alarm';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveBackgroundColor: '#000',
            tabBarInactiveBackgroundColor: '#191919',
            tabBarActiveTintColor: '#ce82f5',
            tabBarInactiveTintColor: '#9672a8',
          })}
        >
          <Tab.Screen 
            name="Budget" 
            component={Budget} 
            options={{
              title: 'Budget',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: '#191919',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                color: '#2fa138'
              }
            }}
          />
          <Tab.Screen 
            name="Savings" 
            component={Savings} 
            options={{
              title: 'Savings',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: '#191919',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                color: '#2fa138'
              }
            }}
          />
          <Tab.Screen 
            name="History" 
            component={History} 
            options={{
              title: 'History',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: '#191919',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                color: '#2fa138'
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
