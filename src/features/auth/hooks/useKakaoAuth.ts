import { useMutation } from '@tanstack/react-query';
import { kakaoAuthService } from '../services/kakaoAuth';

export const useKakaoLogin = () => {
    return useMutation({
        mutationFn: kakaoAuthService.login,
    });
}; 