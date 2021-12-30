import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProductList } from './components/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './context/cardContent';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="Products" 
              component={ProductList} 
              options={({navigation}) => ({
                title: 'Products',
                // headerTitleStyle: styles.headerTitle,
                // headerRight: () => 
              })}
            />
          <Stack.Screen 
              name="ProductDetails" 
              component={ProductList} 
              options={({navigation}) => ({
                title: 'Products',
                // headerTitleStyle: styles.headerTitle,
                // headerRight: () => 
              })}
            />
        </Stack.Navigator>
       </NavigationContainer>
      </CartProvider>
  );
}


export default App;