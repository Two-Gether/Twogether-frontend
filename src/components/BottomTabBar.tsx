import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgIcon from './icons/Icon';

import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import EventScreen from '../screens/EventScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FF6B81',
                tabBarInactiveTintColor: '#767676',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    paddingBottom: 15,
                    paddingTop: 10,
                    height: 70,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon name="home" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon name="map" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Event"
                component={EventScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon name="place" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon name="calendar" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <SvgIcon name="my" width={size} height={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabBar; 