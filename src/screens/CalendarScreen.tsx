import { View, Text, SafeAreaView } from 'react-native';

const CalendarScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center px-6">
                <Text className="text-3xl font-bold text-gray-800 mb-4">
                    📅 달력
                </Text>
                <Text className="text-lg text-gray-600 text-center mb-4">
                    함께하는 일정을 확인해보세요
                </Text>
                <View className="w-64 h-40 bg-blue-100 rounded-lg items-center justify-center">
                    <Text className="text-blue-500">달력이 여기에 표시됩니다</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CalendarScreen; 