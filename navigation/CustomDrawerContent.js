import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ThemeContext } from '../context/ThemeContext'; 
import { Ionicons } from '@expo/vector-icons';

const colors = ['#1976d2', '#d32f2f', '#388e3c', '#f57c00', '#6a1b9a', '#0097a7'];

export default function CustomDrawerContent(props) {
  const { setToolbarColor, userName } = useContext(ThemeContext);
    // determine current focused route so we can style active item
    const focusedRoute = props.state && props.state.routeNames && typeof props.state.index === 'number'
        ? props.state.routeNames[props.state.index]
        : null;

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      
    <View style={styles.header}>
        <Text style={styles.headerText}>Hola, {userName.split(' ')[0]}</Text>
    </View>

      
            <View style={{ padding: 12 }}>
                <DrawerItem
                    label="Forms"
                    focused={focusedRoute === 'Forms'}
                    onPress={() => props.navigation.navigate('Forms')}
                    icon={() => <Ionicons name="document-text-outline" size={20} />}
                    style={focusedRoute === 'Forms' ? styles.drawerItemActive : null}
                    labelStyle={focusedRoute === 'Forms' ? styles.drawerLabelActive : null}
                />
                <DrawerItem
                    label="Mi Perfil"
                    focused={focusedRoute === 'Profile'}
                    onPress={() => props.navigation.navigate('Profile')}
                    icon={() => <Ionicons name="person-outline" size={20} />}
                    style={focusedRoute === 'Profile' ? styles.drawerItemActive : null}
                    labelStyle={focusedRoute === 'Profile' ? styles.drawerLabelActive : null}
                />
            </View>

      
<View style={{ padding: 12 }}>
        <Text style={{ marginBottom: 8, fontWeight: '600' }}>Elige color del toolbar</Text>
        <View style={styles.colorRow}>
{colors.map(c => (
            <Pressable
            key={c}
            onPress={() => {
                setToolbarColor(c);
                props.navigation.closeDrawer();
}}
style={[styles.colorBox, { backgroundColor: c }]}
            />
))}
        </View>
</View>

    
<View style={{ flex: 1 }} />
<View style={{ padding: 12 }}>
        <Text style={{ fontSize: 12, color: '#666' }}>
Proyecto: Gluestack Forms - Demo
        </Text>
</View>
    </DrawerContentScrollView>
);
}

const styles = StyleSheet.create({
header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
},
headerText: {
    fontSize: 18,
    fontWeight: '700',
},
colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
},
colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    margin: 6,
    borderWidth: 1,
    borderColor: '#ddd',
},
drawerItemActive: {
    backgroundColor: '#1976d2',
    borderRadius: 8,
    marginVertical: 4,
},
drawerLabelActive: {
    color: '#fff',
    fontWeight: '600',
},
});
