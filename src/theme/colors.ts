// TwoGether 앱 컬러 팔레트
export const colors = {
    // Grayscale Colors
    grayscale: {
        100: '#333333',
        200: '#555555',
        300: '#767676',
        400: '#CCCCCC',
        500: '#EEEEEE',
        600: '#f9f9f9',
        700: '#FFFFFF',
    },

    // Brand Colors
    brand: {
        primary: '#FF6B81',
        active: '#E63946',
        disable: '#FFC1C1',
    },

    // Status Colors
    condition: '#F1FF2F',
    flow: '#3984E6',
    error: '#E34951',
    success: '#5EB75E',
};

// 타입 정의
export type ColorPalette = typeof colors;
export type ColorKey = keyof ColorPalette; 