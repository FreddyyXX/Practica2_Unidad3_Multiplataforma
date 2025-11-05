import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FormsScreen from './screens/FormsScreen';
import CustomDrawerContent from './navigation/CustomDrawerContent';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { ThemeContext } from './context/ThemeContext';
import ProfileScreen from './screens/ProfileScreen';



const Drawer = createDrawerNavigator();

export default function App() {
  const [toolbarColor, setToolbarColor] = useState('#1976d2');
  const [userName] = useState('Alfredo Giacinti Reyes');

  return (
    <GluestackUIProvider config={config}>
      <ThemeContext.Provider value={{ toolbarColor, setToolbarColor, userName }}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Forms"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerStyle: { backgroundColor: toolbarColor },
              headerTintColor: '#fff',
              // Drawer active item styling
              drawerActiveTintColor: '#ffffff',
              drawerActiveBackgroundColor: toolbarColor,
              drawerInactiveTintColor: '#333',
            }}
          >
            <Drawer.Screen
              name="Forms"
              component={FormsScreen}
              options={{ title: 'Alfredo Giacinti Reyes' }}
            />
            <Drawer.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{ 
                title: 'Mi Perfil',
                headerTitle: 'Perfil de Usuario'
              }} 
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </GluestackUIProvider>
  );
}
