import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Map, Calendar, User, Heart } from 'lucide-react-native';

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
                tabBarActiveTintColor: '#3B82F6',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E5E7EB',
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    tabBarLabel: '메인',
                    tabBarIcon: ({ color, size }) => (
                        <Home size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: '지도',
                    tabBarIcon: ({ color, size }) => (
                        <Map size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Event"
                component={EventScreen}
                options={{
                    tabBarLabel: '행사',
                    tabBarIcon: ({ color, size }) => (
                        <Heart size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: '달력',
                    tabBarIcon: ({ color, size }) => (
                        <Calendar size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: '마이',
                    tabBarIcon: ({ color, size }) => (
                        <User size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabBar; 