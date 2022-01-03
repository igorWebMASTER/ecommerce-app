import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProductList } from './components/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './context/cardContent';
import { StyleSheet } from 'react-native';
import { CartIcon } from './components/CartIcon';
import { ProductDetails } from './screens/ProductDetails';
import { Carts } from './screens/Carts';

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
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />
              })}
            />
          <Stack.Screen 
              name="ProductDetails" 
              component={ProductDetails} 
              options={({navigation}) => ({
                title: 'Product details',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />
              })}
            />
          <Stack.Screen 
              name="Cart" 
              component={Carts} 
              options={({navigation}) => ({
                title: 'Cart',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />
              })}
            />
        </Stack.Navigator>
       </NavigationContainer>
      </CartProvider>
  );
}


export default App;


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
  },
})