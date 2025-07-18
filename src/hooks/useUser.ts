import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserProfile, updateUserProfile, deleteAccount, getUserSettings, updateUserSettings, UserProfile, UpdateProfileRequest, UserSettings } from '../services/user';

// 사용자 프로필 조회 훅
export const useUserProfile = () => {
    return useQuery({
        queryKey: ['user', 'profile'],
        queryFn: getUserProfile,
        staleTime: 5 * 60 * 1000, // 5분
        gcTime: 10 * 60 * 1000, // 10분
    });
};

// 사용자 프로필 업데이트 훅
export const useUpdateUserProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (profileData: UpdateProfileRequest) => updateUserProfile(profileData),
        onSuccess: (updatedProfile) => {
            // 프로필 업데이트 성공 시 캐시 업데이트
            queryClient.setQueryData(['user', 'profile'], updatedProfile);
            // 사용자 정보도 함께 업데이트
            queryClient.setQueryData(['user'], updatedProfile);
        },
        onError: (error) => {
            console.error('프로필 업데이트 실패:', error);
        },
    });
};

// 계정 삭제 훅
export const useDeleteAccount = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteAccount,
        onSuccess: () => {
            // 계정 삭제 성공 시 모든 캐시 클리어
            queryClient.clear();
        },
        onError: (error) => {
            console.error('계정 삭제 실패:', error);
        },
    });
};

// 사용자 설정 조회 훅
export const useUserSettings = () => {
    return useQuery({
        queryKey: ['user', 'settings'],
        queryFn: getUserSettings,
        staleTime: 10 * 60 * 1000, // 10분
        gcTime: 30 * 60 * 1000, // 30분
    });
};

// 사용자 설정 업데이트 훅
export const useUpdateUserSettings = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (settings: Partial<UserSettings>) => updateUserSettings(settings),
        onSuccess: (updatedSettings) => {
            // 설정 업데이트 성공 시 캐시 업데이트
            queryClient.setQueryData(['user', 'settings'], updatedSettings);
        },
        onError: (error) => {
            console.error('설정 업데이트 실패:', error);
        },
    });
}; 