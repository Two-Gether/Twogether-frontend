import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

interface SignupScreenProps {
    navigation: any;
}

const SignupScreen = ({ navigation }: SignupScreenProps) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center px-6">
                <Text className="text-3xl font-bold text-gray-800 mb-8">
                    회원가입
                </Text>

                <View className="w-full space-y-4">
                    <TextInput
                        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
                        placeholder="이름"
                        placeholderTextColor="#9CA3AF"
                    />

                    <TextInput
                        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
                        placeholder="이메일"
                        placeholderTextColor="#9CA3AF"
                    />

                    <TextInput
                        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
                        placeholder="비밀번호"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                    />

                    <TextInput
                        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
                        placeholder="비밀번호 확인"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                    />

                    <TouchableOpacity
                        className="w-full h-12 bg-blue-500 rounded-lg justify-center items-center mt-6"
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        <Text className="text-white font-semibold text-lg">가입하기</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-full h-12 justify-center items-center mt-2"
                        onPress={() => navigation.goBack()}
                    >
                        <Text className="text-gray-500 font-semibold text-lg">뒤로가기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignupScreen; 