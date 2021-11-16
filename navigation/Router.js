import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

//constans
import { COLORS, icons } from '../constants'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const dTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Router = () => {
    return (
        <NavigationContainer theme={dTheme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Root"
            >
                <Stack.Screen name="Root" component={Tabs} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: '10%',
                    backgroundColor: COLORS.black,
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.dashboard_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Search" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Notifications" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.notification_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Menu" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.menu_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator >
    )
}

export default Router
