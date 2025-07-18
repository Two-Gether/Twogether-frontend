import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, register, logout, socialLogin, LoginRequest, RegisterRequest, SocialLoginRequest } from '../services/auth';

// 로그인 훅
export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginRequest) => login(credentials),
        onSuccess: (data) => {
            // 로그인 성공 시 사용자 정보를 캐시에 저장
            queryClient.setQueryData(['user'], data.user);
            // 토큰을 저장 (AsyncStorage 등)
            // AsyncStorage.setItem('accessToken', data.accessToken);
            // AsyncStorage.setItem('refreshToken', data.refreshToken);
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        },
    });
};

// 회원가입 훅
export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userData: RegisterRequest) => register(userData),
        onSuccess: (data) => {
            // 회원가입 성공 시 사용자 정보를 캐시에 저장
            queryClient.setQueryData(['user'], data.user);
            // 토큰을 저장
            // AsyncStorage.setItem('accessToken', data.accessToken);
            // AsyncStorage.setItem('refreshToken', data.refreshToken);
        },
        onError: (error) => {
            console.error('회원가입 실패:', error);
        },
    });
};

// 로그아웃 훅
export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            // 로그아웃 시 캐시 클리어
            queryClient.clear();
            // 토큰 제거
            // AsyncStorage.removeItem('accessToken');
            // AsyncStorage.removeItem('refreshToken');
        },
        onError: (error) => {
            console.error('로그아웃 실패:', error);
        },
    });
};

// 소셜 로그인 훅
export const useSocialLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: SocialLoginRequest) => socialLogin(request),
        onSuccess: (data) => {
            // 소셜 로그인 성공 시 사용자 정보를 캐시에 저장
            queryClient.setQueryData(['user'], data.user);
            // 토큰을 저장
            // AsyncStorage.setItem('accessToken', data.accessToken);
            // AsyncStorage.setItem('refreshToken', data.refreshToken);
        },
        onError: (error) => {
            console.error('소셜 로그인 실패:', error);
        },
    });
}; 