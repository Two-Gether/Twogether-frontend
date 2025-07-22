// src/shared/components/icons/Icon.tsx
import { SvgXml } from 'react-native-svg';
import { icons, IconName } from '../../../../generated/icons';

interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, color }) => {
    const xml = icons[name];
    if (!xml) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    let modifiedXml = xml;

    // 소셜 로고 아이콘들은 색상을 변경하지 않음
    const socialLogos = ['naver-logo', 'kakao-logo', 'apple-logo', 'google-logo'];
    const outlineIcons = ['home', 'map', 'place', 'calendar', 'my'];
    const isSocialLogo = socialLogos.includes(name);
    const isOutlineIcon = outlineIcons.includes(name);

    if (color && !isSocialLogo) {
        // currentColor를 실제 색상으로 변경
        modifiedXml = modifiedXml.replace(/currentColor/g, color);
        // stroke 속성만 처리 (테두리 색상)
        modifiedXml = modifiedXml.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
        if (isOutlineIcon) {
            // outline 아이콘은 fill="none"으로 강제
            modifiedXml = modifiedXml.replace(/fill="[^"]*"/g, 'fill="none"');
        } else {
            // filled 아이콘은 fill을 color로 치환
            modifiedXml = modifiedXml.replace(/fill="currentColor"/g, `fill="${color}"`);
        }
    }

    return <SvgXml xml={modifiedXml} width={width} height={height} />;
};

export default Icon;
