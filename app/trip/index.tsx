// app/trip/index.tsx
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function TripListScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>여행 목록</Text>
            <Button title="1번 여행 상세로 이동" onPress={() => router.push('/trip/1')} />
        </View>
    );
}
