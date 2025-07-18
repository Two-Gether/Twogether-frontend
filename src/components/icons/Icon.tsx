import React from 'react';
import { SvgXml } from 'react-native-svg';

interface IconProps {
    xml: string;
    width?: number;
    height?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ xml, width = 24, height = 24, color }) => {
    // SVG에서 색상을 동적으로 변경하기 위해 xml을 수정
    const modifiedXml = color
        ? xml.replace(/fill="[^"]*"/g, `fill="${color}"`)
        : xml;

    return (
        <SvgXml
            xml={modifiedXml}
            width={width}
            height={height}
        />
    );
};

export default Icon; 