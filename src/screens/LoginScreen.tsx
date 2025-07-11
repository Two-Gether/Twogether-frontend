import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    MainDetail: { id: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp>();

    const handleLogin = () => {
        navigation.navigate('Main');
    };

    return (
        <View className="flex-1 px-5 pt-20 bg-gray-50">
            <Text className="text-2xl font-semibold text-center text-gray-900 mb-8">로그인</Text>

            <TextInput
                className="border border-gray-200 rounded-lg p-4 mb-4 text-sm text-gray-900"
                placeholder="아이디를 입력해주세요"
                placeholderTextColor="#6B7280"
            />

            <TextInput
                className="border border-gray-200 rounded-lg p-4 mb-4 text-sm text-gray-900"
                placeholder="비밀번호를 입력해주세요"
                placeholderTextColor="#6B7280"
                secureTextEntry
            />

            <TouchableOpacity
                className="bg-brand py-4 rounded-lg items-center mt-2"
                onPress={handleLogin}
            >
                <Text className="text-white text-base font-bold">로그인</Text>
            </TouchableOpacity>

        </View>
    );
}
