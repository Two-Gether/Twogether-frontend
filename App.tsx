import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import MainDetailScreen from './src/screens/MainDetailScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: true,
                    }}>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: '로그인' }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={MainScreen}
                        options={{ title: '메인' }}
                    />
                    <Stack.Screen
                        name="MainDetail"
                        component={MainDetailScreen}
                        options={{ title: '여행 상세' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App; 