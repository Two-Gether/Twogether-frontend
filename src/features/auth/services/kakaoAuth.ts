import { login } from '@react-native-seoul/kakao-login';

export interface KakaoLoginResponse {
    nickname: string;
    partnerId: number | null;
    accessToken: string;
    partnerNickname: string | null;
    memberId: number;
}

export const kakaoAuthService = {
    // 카카오 로그인 실행
    login: async (): Promise<KakaoLoginResponse> => {
        try {
            if (!login || typeof login !== 'function') {
                throw new Error('카카오 SDK가 제대로 초기화되지 않았습니다.');
            }

            const token = await login();

            if (!token || !token.accessToken) {
                throw new Error('카카오 토큰을 받지 못했습니다.');
            }

            // 임시 응답 (실제로는 리다이렉트 URL에서 처리됨)
            return {
                nickname: '카카오 사용자',
                partnerId: null,
                accessToken: token.accessToken,
                partnerNickname: null,
                memberId: 1
            };

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`카카오 로그인에 실패했습니다: ${error.message}`);
            }

            throw new Error('카카오 로그인에 실패했습니다.');
        }
    },
}; 