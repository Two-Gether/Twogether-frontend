// 사용자 관련 API 서비스

import { apiGet, apiPut, apiDelete } from './api';

// 타입 정의
export interface UserProfile {
    id: string;
    email: string;
    name: string;
    phone?: string;
    profileImage?: string;
    birthDate?: string;
    gender?: 'male' | 'female' | 'other';
    createdAt: string;
    updatedAt: string;
}

export interface UpdateProfileRequest {
    name?: string;
    phone?: string;
    profileImage?: string;
    birthDate?: string;
    gender?: 'male' | 'female' | 'other';
}

export interface UserSettings {
    notifications: {
        push: boolean;
        email: boolean;
        sms: boolean;
    };
    privacy: {
        profileVisibility: 'public' | 'private' | 'friends';
        locationSharing: boolean;
    };
    theme: 'light' | 'dark' | 'auto';
    language: 'ko' | 'en';
}

// 사용자 프로필 조회
export const getUserProfile = async (): Promise<UserProfile> => {
    return apiGet<UserProfile>('/user/profile');
};

// 사용자 프로필 업데이트
export const updateUserProfile = async (profileData: UpdateProfileRequest): Promise<UserProfile> => {
    return apiPut<UserProfile>('/user/profile', profileData);
};

// 계정 삭제
export const deleteAccount = async (): Promise<void> => {
    return apiDelete<void>('/user/account');
};

// 사용자 설정 조회
export const getUserSettings = async (): Promise<UserSettings> => {
    return apiGet<UserSettings>('/user/settings');
};

// 사용자 설정 업데이트
export const updateUserSettings = async (settings: Partial<UserSettings>): Promise<UserSettings> => {
    return apiPut<UserSettings>('/user/settings', settings);
}; 