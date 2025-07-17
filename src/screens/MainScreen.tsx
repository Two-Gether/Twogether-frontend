import { View, Text, SafeAreaView, ScrollView } from 'react-native';

const MainScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="px-6 py-4">
                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-6">
                        <Text className="text-lg font-semibold text-gray-800">TWOGETHER</Text>
                        <View className="flex-row space-x-4">
                            <Text className="text-lg">🔔</Text>
                            <Text className="text-lg">🔍</Text>
                        </View>
                    </View>

                    {/* Main Content */}
                    <View className="mb-8">
                        <Text className="text-xl text-gray-700 mb-2">
                            우리가 함께한 지
                        </Text>
                        <Text className="text-3xl font-bold text-red-500 mb-4">
                            350일이 지났어요!
                        </Text>

                        {/* Cat Illustration Placeholder */}
                        <View className="flex-row justify-center items-center mb-6">
                            <View className="w-16 h-16 bg-gray-200 rounded-full mr-4 items-center justify-center">
                                <Text className="text-2xl">🐱</Text>
                            </View>
                            <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center">
                                <Text className="text-xl">🐱</Text>
                            </View>
                        </View>
                    </View>

                    {/* Recommendation Section */}
                    <View>
                        <Text className="text-lg font-semibold text-gray-800 mb-4">
                            대충 놀만한 것 추천 리스트
                        </Text>

                        {/* Recommendation Item */}
                        <View className="flex-row items-center mb-4">
                            <View className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full items-center justify-center mr-3">
                                <Text className="text-white font-bold text-lg">H</Text>
                            </View>
                            <View className="flex-1">
                                <Text className="text-gray-700 font-medium">추천 활동</Text>
                                <Text className="text-gray-500 text-sm">함께 즐길 수 있는 활동</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen; 