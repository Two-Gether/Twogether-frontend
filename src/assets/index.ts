// 정적 파일 관리 유틸리티

// 이미지 경로 정의
export const images = {
    // 아이콘들
    icons: {
        home: require('./images/icons/home.png'),
        map: require('./images/icons/map.png'),
        event: require('./images/icons/event.png'),
        calendar: require('./images/icons/calendar.png'),
        profile: require('./images/icons/profile.png'),
    },

    // 로고들
    logos: {
        appLogo: require('./images/logos/app-logo.png'),
        brandLogo: require('./images/logos/brand-logo.png'),
        // 추가 로고들...
    },

    // 배경 이미지들
    backgrounds: {
        loginBg: require('./images/backgrounds/login-bg.png'),
        mainBg: require('./images/backgrounds/main-bg.png'),
        // 추가 배경 이미지들...
    },

    // 기타 이미지들
    misc: {
        placeholder: require('./images/misc/placeholder.png'),
        avatar: require('./images/misc/avatar.png'),
        // 추가 이미지들...
    },
};

// 폰트 정의
export const fonts = {
    // Gowun Dodum 폰트들
    gowunDodumRegular: require('./fonts/GowunDodum-Regular.ttf'),

    // Catways Font (로고용)
    catwaysFont: require('./fonts/Catways.ttf'),
};

// 애니메이션 파일들
export const animations = {
    // Lottie 애니메이션 파일들
    loading: require('./animations/loading.json'),
    success: require('./animations/success.json'),
    error: require('./animations/error.json'),
    // 추가 애니메이션들...
};

// 타입 정의
export type ImageKey = keyof typeof images;
export type FontKey = keyof typeof fonts;
export type AnimationKey = keyof typeof animations; 