// 파일 경로: app/login/index.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '@/constants/Colors';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>

            <TextInput
                style={styles.input}
                placeholder="아이디를 입력해주세요"
                placeholderTextColor={colors.gray[500]}
            />

            <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력해주세요"
                placeholderTextColor={colors.gray[500]}
                secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
            </TouchableOpacity>

            <View style={styles.bottomLinks}>
                <Text style={styles.linkRed}>회원가입하기</Text>
                <Text style={styles.link}>아이디 찾기</Text>
                <Text style={styles.link}>비밀번호 찾기</Text>
            </View>

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.socialIcons}>
                <Image source={require('@/assets/icons/naver.svg')} style={styles.socialIcon} />
                <Image source={require('@/assets/icons/kakao.svg')} style={styles.socialIcon} />
                <Image source={require('@/assets/icons/apple.svg')} style={styles.socialIcon} />
                <Image source={require('@/assets/icons/google.svg')} style={styles.socialIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80,
        backgroundColor: colors.gray[50],
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 32,
        color: colors.gray[900],
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        fontSize: 14,
        color: colors.gray[900],
    },
    loginButton: {
        backgroundColor: colors.brand.default,
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    link: {
        color: colors.gray[500],
        fontSize: 14,
    },
    linkRed: {
        color: colors.brand.default,
        fontSize: 14,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[200],
    },
    dividerText: {
        marginHorizontal: 16,
        color: colors.gray[500],
        fontSize: 14,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
});
