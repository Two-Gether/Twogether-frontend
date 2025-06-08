// app/trip/[id].tsx
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TripDetailScreen() {
    const { id } = useLocalSearchParams();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>여행 상세 페이지입니다: ID {id}</Text>
        </View>
    );
}
