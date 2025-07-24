const fs = require('fs');
const path = require('path');

// .env 파일 읽기
const envPath = path.join(__dirname, '..', '.env');
const infoPlistTemplatePath = path.join(__dirname, '..', 'ios', 'TwoGether', 'Info.plist.template');
const infoPlistPath = path.join(__dirname, '..', 'ios', 'TwoGether', 'Info.plist');

try {
    // .env 파일이 있는지 확인
    if (!fs.existsSync(envPath)) {
        console.error('.env 파일이 없습니다. .env 파일을 생성하고 KAKAO_CLIENT_ID를 설정해주세요.');
        process.exit(1);
    }

    // .env 파일 읽기
    const envContent = fs.readFileSync(envPath, 'utf8');
    const kakaoClientIdMatch = envContent.match(/KAKAO_CLIENT_ID=([^\n]+)/);

    if (!kakaoClientIdMatch) {
        console.error('.env 파일에 KAKAO_CLIENT_ID가 설정되지 않았습니다.');
        process.exit(1);
    }

    const kakaoClientId = kakaoClientIdMatch[1].trim();
    console.log('카카오 클라이언트 ID:', kakaoClientId);

    // 템플릿 파일이 있는지 확인
    if (!fs.existsSync(infoPlistTemplatePath)) {
        console.error('Info.plist.template 파일이 없습니다.');
        process.exit(1);
    }

    // 템플릿 파일 읽기
    const templateContent = fs.readFileSync(infoPlistTemplatePath, 'utf8');

    // 플레이스홀더를 실제 키로 교체
    const updatedContent = templateContent
        .replace(/kakaoYOUR_APP_KEY_HERE/g, `kakao${kakaoClientId}`)
        .replace(/YOUR_KAKAO_APP_KEY_HERE/g, kakaoClientId);

    // Info.plist 파일에 쓰기
    fs.writeFileSync(infoPlistPath, updatedContent);
    console.log('Info.plist가 생성되었습니다. (카카오 URL 스킴 및 앱 키 포함)');

} catch (error) {
    console.error('스크립트 실행 중 오류:', error);
    process.exit(1);
} 