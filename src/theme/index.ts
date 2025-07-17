// TwoGether 앱 전체 테마 설정
export { colors } from './colors';
export { typography } from './typography';
export { spacing, layout } from './spacing';

// 전체 테마 객체
export const theme = {
    colors: require('./colors').colors,
    typography: require('./typography').typography,
    spacing: require('./spacing').spacing,
    layout: require('./spacing').layout,
};

// 타입 정의
export type Theme = typeof theme; 