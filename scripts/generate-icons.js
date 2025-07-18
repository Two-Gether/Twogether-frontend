const fs = require('fs');
const path = require('path');

// SVG 파일들을 읽어서 아이콘 객체로 변환하는 함수
function generateIcons() {
    const iconsDir = path.join(__dirname, '../src/assets/images');
    const outputPath = path.join(__dirname, '../generated/icons.ts');

    const icons = {};

    // 각 폴더에서 SVG 파일들을 읽기
    const folders = ['common', 'icons', 'navigation'];

    folders.forEach(folder => {
        const folderPath = path.join(iconsDir, folder);
        if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath);

            files.forEach(file => {
                if (file.endsWith('.svg')) {
                    const filePath = path.join(folderPath, file);
                    const content = fs.readFileSync(filePath, 'utf8');

                    // 파일명에서 확장자 제거하여 키 생성
                    const key = file.replace('.svg', '');

                    // stroke와 fill 색상을 currentColor로 변경하여 동적 색상 지원
                    const modifiedContent = content
                        .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
                        .replace(/fill="[^"]*"/g, 'fill="currentColor"');

                    icons[key] = modifiedContent;
                }
            });
        }
    });

    // TypeScript 파일 생성
    const typeScriptContent = `// 자동 생성된 아이콘 파일
// 이 파일은 scripts/generate-icons.js에 의해 자동 생성됩니다.
// 원본 SVG 파일: src/assets/images/

export const icons = ${JSON.stringify(icons, null, 2)};

export type IconName = keyof typeof icons;
`;

    // 출력 디렉토리 생성
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 파일 작성
    fs.writeFileSync(outputPath, typeScriptContent);

    console.log(`✅ ${Object.keys(icons).length}개의 아이콘이 생성되었습니다:`);
    Object.keys(icons).forEach(key => {
        console.log(`  - ${key}`);
    });
    console.log(`📁 생성된 파일: ${outputPath}`);
}

generateIcons(); 