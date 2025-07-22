import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import SvgIcon from '../../../shared/components/icons/Icon';
import { useLogin, useSocialLogin } from '../hooks/useAuth';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useLogin();
    const socialLoginMutation = useSocialLogin();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('알림', '이메일과 비밀번호를 입력해주세요.');
            return;
        }

        loginMutation.mutate(
            { email, password },
            {
                onSuccess: () => {
                    navigation.navigate('MainApp');
                },
                onError: (error) => {
                    Alert.alert('로그인 실패', error.message);
                },
            }
        );
    };

    const handleSocialLogin = (provider: 'naver' | 'kakao' | 'apple' | 'google') => {
        // 실제로는 각 소셜 로그인 SDK를 사용해야 함
        const mockToken = `mock_${provider}_token`;
        const mockUserInfo = {
            id: `user_${provider}_123`,
            email: `user@${provider}.com`,
            name: `${provider} 사용자`,
        };

        socialLoginMutation.mutate(
            {
                provider,
                token: mockToken,
                userInfo: mockUserInfo,
            },
            {
                onSuccess: () => {
                    navigation.navigate('MainApp');
                },
                onError: (error) => {
                    Alert.alert('소셜 로그인 실패', error.message);
                },
            }
        );
    };

    const handleSignup = () => {
        // 임시로 메인 앱으로 이동
        navigation.navigate('MainApp');
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 justify-start items-center px-6 pt-20 pb-10">
                    <Text className="text-2xl font-normal text-gray-700 mb-8 font-gowun">
                        로그인
                    </Text>

                    <View className="w-full gap-4 mb-8">
                        {/* 아이디 입력창 */}
                        <View className="w-full h-14 px-4 bg-white rounded-lg border border-gray-500 justify-center">
                            <TextInput
                                className="text-gray-300 text-sm font-gowun font-normal leading-5"
                                placeholder="이메일을 입력해주세요"
                                placeholderTextColor="#767676"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        {/* 비밀번호 입력창 */}
                        <View className="w-full h-14 px-4 bg-white rounded-lg border border-gray-500 justify-between items-center flex-row">
                            <TextInput
                                className="flex-1 text-gray-300 text-sm font-gowun font-normal leading-5"
                                placeholder="비밀번호를 입력해주세요"
                                placeholderTextColor="#767676"
                                secureTextEntry={!isPasswordVisible}
                                value={password}
                                onChangeText={setPassword}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                className="p-1"
                            >
                                <SvgIcon
                                    name={isPasswordVisible ? "pw_open" : "pw_close"}
                                    width={20}
                                    height={20}
                                    color="#767676"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* 로그인 버튼 */}
                        <TouchableOpacity
                            className={`w-full h-12 bg-brand-500 rounded-lg justify-center items-center ${loginMutation.isPending ? 'opacity-60' : 'opacity-100'}`}
                            onPress={handleLogin}
                            disabled={loginMutation.isPending}
                        >
                            <Text className="text-white text-sm font-gowun font-normal leading-8">
                                {loginMutation.isPending ? '로그인 중...' : '로그인'}
                            </Text>
                        </TouchableOpacity>

                        <View className="flex-row justify-between mt-1">
                            <TouchableOpacity onPress={handleSignup}>
                                <Text className="text-brand-500 underline font-gowun">
                                    회원가입하기
                                </Text>
                            </TouchableOpacity>
                            <View className="flex-row gap-4">
                                <TouchableOpacity>
                                    <Text className="text-gray-500 font-gowun">
                                        아이디 찾기
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text className="text-gray-500 font-gowun">
                                        비밀번호 찾기
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* 간편 로그인 섹션 */}
                    <View className="items-center w-full">
                        <View className="flex-row items-center mb-6 w-full">
                            <View className="flex-1 h-px bg-gray-400" />
                            <Text className="mx-4 text-gray-500 font-gowun">
                                or
                            </Text>
                            <View className="flex-1 h-px bg-gray-400" />
                        </View>

                        <View className="flex-row justify-center gap-5">
                            {/* 네이버 */}
                            <TouchableOpacity
                                onPress={() => handleSocialLogin('naver')}
                                disabled={socialLoginMutation.isPending}
                            >
                                <SvgIcon name="naver-logo" width={48} height={48} color="#03C75A" />
                            </TouchableOpacity>

                            {/* 카카오톡 */}
                            <TouchableOpacity
                                onPress={() => handleSocialLogin('kakao')}
                                disabled={socialLoginMutation.isPending}
                            >
                                <SvgIcon name="kakao-logo" width={48} height={48} color="#FEE500" />
                            </TouchableOpacity>

                            {/* Apple */}
                            <TouchableOpacity
                                onPress={() => handleSocialLogin('apple')}
                                disabled={socialLoginMutation.isPending}
                            >
                                <SvgIcon name="apple-logo" width={48} height={48} color="black" />
                            </TouchableOpacity>

                            {/* Google */}
                            <TouchableOpacity
                                onPress={() => handleSocialLogin('google')}
                                disabled={socialLoginMutation.isPending}
                            >
                                <SvgIcon name="google-logo" width={48} height={48} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen; 