import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    MainDetail: { id: string };
};

type RouteParams = RouteProp<RootStackParamList, 'MainDetail'>;

export default function MainDetailScreen() {
    const route = useRoute<RouteParams>();
    const { id } = route.params;

    return (
        <View className="flex-1 justify-center items-center bg-gray-50 p-5">
            <Text className="text-2xl font-semibold mb-5 text-gray-900">여행 상세 - {id}번</Text>
            <Text className="text-base text-gray-500 text-center">여행 상세 정보가 여기에 표시됩니다.</Text>
        </View>
    );
} 