import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    MainDetail: { id: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View className="flex-1 justify-center items-center bg-gray-50">
            <Text className="text-2xl font-semibold mb-5 text-gray-900">여행 목록</Text>
            <TouchableOpacity
                className="bg-brand-default px-6 py-3 rounded-lg"
                onPress={() => navigation.navigate('MainDetail', { id: '1' })}
            >
                <Text className="text-white font-semibold">1번 여행 상세로 이동</Text>
            </TouchableOpacity>
        </View>
    );
} 