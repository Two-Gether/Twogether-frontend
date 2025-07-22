import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService, LoginRequest, RegisterRequest, SocialLoginRequest, LoginResponse } from '../services/auth';

// 로그인 훅
export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginRequest) => authService.login(credentials),
        onSuccess: (data: LoginResponse) => {
            // 로그인 성공 시 사용자 정보를 캐시에 저장
            queryClient.setQueryData(['user'], data.user);
            queryClient.setQueryData(['auth'], { isAuthenticated: true, token: data.accessToken });
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });
};

// 소셜 로그인 훅
export const useSocialLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: SocialLoginRequest) => authService.socialLogin(request),
        onSuccess: (data: LoginResponse) => {
            queryClient.setQueryData(['user'], data.user);
            queryClient.setQueryData(['auth'], { isAuthenticated: true, token: data.accessToken });
        },
        onError: (error) => {
            console.error('Social login failed:', error);
        },
    });
};

// 회원가입 훅
export const useSignup = () => {
    return useMutation({
        mutationFn: (userData: RegisterRequest) => authService.signup(userData),
        onSuccess: (data: LoginResponse) => {
            console.log('Signup successful:', data);
        },
        onError: (error) => {
            console.error('Signup failed:', error);
        },
    });
};

// 로그아웃 훅
export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            // 로그아웃 시 모든 캐시 클리어
            queryClient.clear();
        },
        onError: (error) => {
            console.error('Logout failed:', error);
        },
    });
};

// 인증 상태 확인 훅
export const useAuth = () => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: () => {
            // 실제로는 토큰 검증 API를 호출해야 함
            const token = null; // AsyncStorage 등에서 토큰 가져오기
            return { isAuthenticated: !!token, token };
        },
        staleTime: 5 * 60 * 1000, // 5분
    });
}; 