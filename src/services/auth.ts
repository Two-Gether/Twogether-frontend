// 인증 관련 API 서비스

import { apiPost } from './api';

// 타입 정의
export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    phone?: string;
}

export interface SocialLoginRequest {
    provider: 'naver' | 'kakao' | 'apple' | 'google';
    token: string;
    userInfo?: {
        id: string;
        email?: string;
        name?: string;
        profileImage?: string;
    };
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        name: string;
        profileImage?: string;
    };
}

// 일반 로그인
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiPost<LoginResponse>('/auth/login', credentials);
};

// 회원가입
export const register = async (userData: RegisterRequest): Promise<LoginResponse> => {
    return apiPost<LoginResponse>('/auth/register', userData);
};

// 로그아웃
export const logout = async (): Promise<void> => {
    return apiPost<void>('/auth/logout');
};

// 소셜 로그인
export const socialLogin = async (request: SocialLoginRequest): Promise<LoginResponse> => {
    return apiPost<LoginResponse>(`/auth/social/${request.provider}`, request);
};

// 토큰 갱신
export const refreshToken = async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
    return apiPost<{ accessToken: string; refreshToken: string }>('/auth/refresh', { refreshToken });
}; 