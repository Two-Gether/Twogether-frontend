import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, typography } from '../theme';
import SvgIcon from '../components/icons/Icon';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.grayscale[700] }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 24, paddingTop: 200 }}>
                <Text style={{
                    fontSize: typography.fontSize['2xl'],
                    fontWeight: 'normal',
                    color: colors.grayscale[100],
                    marginBottom: 32,
                    fontFamily: typography.fontFamily.base
                }}>
                    로그인
                </Text>

                <View style={{ width: '100%', gap: 16 }}>
                    {/* 아이디 입력창 */}
                    <View style={{
                        width: '100%',
                        height: 56,
                        paddingHorizontal: 16,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#EEEEEE',
                        justifyContent: 'center'
                    }}>
                        <TextInput
                            style={{
                                color: colors.grayscale[100],
                                fontSize: 14,
                                fontFamily: typography.fontFamily.base,
                                fontWeight: '400',
                                lineHeight: 20
                            }}
                            placeholder="아이디를 입력해주세요"
                            placeholderTextColor={colors.grayscale[300]}
                        />
                    </View>

                    {/* 비밀번호 입력창 */}
                    <View style={{
                        width: '100%',
                        height: 56,
                        paddingHorizontal: 16,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#EEEEEE',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: colors.grayscale[100],
                                fontSize: 14,
                                fontFamily: typography.fontFamily.base,
                                fontWeight: '400',
                                lineHeight: 20
                            }}
                            placeholder="비밀번호를 입력해주세요"
                            placeholderTextColor={colors.grayscale[300]}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            style={{ padding: 4 }}
                        >
                            <SvgIcon
                                name={isPasswordVisible ? "pw_close" : "pw_open"}
                                width={20}
                                height={20}
                                color={colors.grayscale[300]}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* 로그인 버튼 */}
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: 48,
                            backgroundColor: colors.brand.primary,
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        <Text style={{
                            color: colors.grayscale[700],
                            fontSize: 14,
                            fontFamily: typography.fontFamily.base,
                            fontWeight: '400',
                            lineHeight: 33.6
                        }}>
                            로그인
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={{
                                color: colors.brand.primary,
                                textDecorationLine: 'underline',
                                fontFamily: typography.fontFamily.base
                            }}>
                                회원가입하기
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 16 }}>
                            <TouchableOpacity>
                                <Text style={{
                                    color: colors.grayscale[300],
                                    fontFamily: typography.fontFamily.base
                                }}>
                                    아이디 찾기
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    color: colors.grayscale[300],
                                    fontFamily: typography.fontFamily.base
                                }}>
                                    비밀번호 찾기
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* 간편 로그인 섹션 */}
                <View style={{
                    position: 'absolute',
                    bottom: 100,
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 24,
                        width: '100%'
                    }}>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: colors.grayscale[400]
                        }} />
                        <Text style={{
                            marginHorizontal: 16,
                            color: colors.grayscale[300],
                            fontFamily: typography.fontFamily.base
                        }}>
                            or
                        </Text>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: colors.grayscale[400]
                        }} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 20
                    }}>
                        {/* 네이버 */}
                        <TouchableOpacity onPress={() => console.log('네이버 로그인')}>
                            <SvgIcon name="naver-logo" width={48} height={48} color="#03C75A" />
                        </TouchableOpacity>

                        {/* 카카오톡 */}
                        <TouchableOpacity onPress={() => console.log('카카오 로그인')}>
                            <SvgIcon name="kakao-logo" width={48} height={48} color="#FEE500" />
                        </TouchableOpacity>

                        {/* Apple */}
                        <TouchableOpacity onPress={() => console.log('애플 로그인')}>
                            <SvgIcon name="apple-logo" width={48} height={48} color="black" />
                        </TouchableOpacity>

                        {/* Google */}
                        <TouchableOpacity onPress={() => console.log('구글 로그인')}>
                            <SvgIcon name="google-logo" width={48} height={48} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen; 