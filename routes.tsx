import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/AntDesign'

import Product from './src/screens/product/views-product'

const { MoreProduct, ShowProduct } = Product

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: '#6200ee',
                }
            }}>
                <Stack.Screen
                    name="Produtos"
                    component={ShowProduct}
                    options={{
                        title: "Produtos"
                    }}
                />
                <Stack.Screen
                    name="Detalhes"
                    options={({ navigation, route }) => ({
                        title: "Detalhes",
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Icon name="close" size={24} color="#fff" style={{
                                    marginRight: 40
                                }} />
                            </TouchableOpacity>
                        ),
                    })}
                    component={MoreProduct}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
