import React from 'react';
import Icon from './Icon';
import { icons, IconName } from '../../../generated/icons';

interface SvgIconProps {
    name: IconName;
    width?: number;
    height?: number;
    color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, width = 24, height = 24, color }) => {
    const iconXml = icons[name];

    if (!iconXml) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <Icon
            xml={iconXml}
            width={width}
            height={height}
            color={color}
        />
    );
};

export default SvgIcon;