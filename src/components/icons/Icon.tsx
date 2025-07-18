// src/components/icons/Icon.tsx
import { SvgXml } from 'react-native-svg';
import { icons, IconName } from '../../../generated/icons';

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

    if (color) {
        // currentColor를 실제 색상으로 변경
        modifiedXml = modifiedXml.replace(/currentColor/g, color);

        // stroke 속성만 처리 (테두리 색상)
        modifiedXml = modifiedXml.replace(/stroke="[^"]*"/g, `stroke="${color}"`);

        // fill 속성은 "none"으로 유지 (내부 채우기 없음)
        modifiedXml = modifiedXml.replace(/fill="[^"]*"/g, 'fill="none"');
    }

    return <SvgXml xml={modifiedXml} width={width} height={height} />;
};

export default Icon;
