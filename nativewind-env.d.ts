/// <reference types="nativewind/types" />

declare module '@env' {
    export const KAKAO_CLIENT_ID: string;
    export const API_BASE_URL: string;
    export const NAVER_CLIENT_ID: string;
    export const GOOGLE_CLIENT_ID: string;
    export const APPLE_CLIENT_ID: string;
}

declare module '*.ttf' {
    const content: any;
    export default content;
}

declare module '*.otf' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

interface CustomFonts {
    'font-gowun': string;
    'font-catways': string;
} 