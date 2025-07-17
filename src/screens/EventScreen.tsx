import { View, Text, SafeAreaView } from 'react-native';

const EventScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center px-6">
                <Text className="text-3xl font-bold text-gray-800 mb-4">
                    💝 행사
                </Text>
                <Text className="text-lg text-gray-600 text-center mb-4">
                    함께 참여할 행사를 찾아보세요
                </Text>
                <View className="w-64 h-40 bg-pink-100 rounded-lg items-center justify-center">
                    <Text className="text-pink-500">행사 목록이 여기에 표시됩니다</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EventScreen; 