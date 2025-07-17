import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center px-6">
                <Text className="text-3xl font-bold text-gray-800 mb-8">
                    TwoGether
                </Text>

                <View className="w-full space-y-4">
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

                    <TouchableOpacity
                        className="w-full h-12 bg-blue-500 rounded-lg justify-center items-center mt-6"
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        <Text className="text-white font-semibold text-lg">로그인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-full h-12 border border-blue-500 rounded-lg justify-center items-center mt-2"
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text className="text-blue-500 font-semibold text-lg">회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen; 