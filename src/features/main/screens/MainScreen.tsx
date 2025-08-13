import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import SvgIcon from '../../../shared/components/icons/Icon';
import MainCatSvg from '../../../assets/images/illust/cats/main_cat.svg';
import MainShadowSvg from '../../../assets/images/illust/cats/main_shadow.svg';

const MainScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1">
                <View className="px-6 py-6">
                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-6">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            className="p-2"
                        >
                            <Text className="text-xl text-gray-700 font-catways">TWOGETHER</Text>
                        </TouchableOpacity>
                        <View className="flex-row">
                            <SvgIcon name="search" width={24} height={24} color="#767676" />
                        </View>
                    </View>

                    {/* Main Content */}
                    <View className="mb-8">
                        <Text className="text-base text-gray-700 mb-2 font-gowun">
                            우리가 함께한 지{'\n'}
                            <Text className="text-2xl text-brand-active font-gowun" style={{ fontWeight: 'bold' }}>350일</Text>
                            <Text className="text-2xl text-gray-700 font-gowun" style={{ fontWeight: 'bold' }}>이 지났어요!</Text>
                        </Text>
                    </View>

                    <View className="items-end mb-16">
                        <View className="ml-10 z-10">
                            <MainCatSvg width={250} height={150} />
                        </View>
                        <View className="mt-[-13px] z-0">
                            <MainShadowSvg width={300} height={15} />
                        </View>
                    </View>

                    {/* Recommendation Section */}
                    <View>
                        <Text className="text-xl font-semibold text-gray-700 mb-4 font-gowun">
                            대충 놀만한 것 추천 리스트
                        </Text>

                        {/* Recommendation Item */}
                        <View className="flex-row items-center mb-4">
                            <View className="w-12 h-12 bg-brand-500 rounded-full mr-3 justify-center items-center">
                                <Text className="text-white font-bold text-lg font-gowun">H</Text>
                            </View>
                            <View className="flex-1">
                                <Text className="text-gray-700 font-medium font-gowun">
                                    추천 활동
                                </Text>
                                <Text className="text-gray-500 text-sm font-gowun">
                                    함께 즐길 수 있는 활동
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen; 