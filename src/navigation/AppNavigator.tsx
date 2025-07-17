import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabBar from '../components/BottomTabBar';

// 네비게이션 타입 정의
type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    MainApp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        // @ts-ignore - React Navigation TypeScript issue
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="MainApp" component={BottomTabBar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;