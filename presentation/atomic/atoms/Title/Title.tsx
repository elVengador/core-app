import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Title.scss';
import { Style } from '../../../utils/interfaces.utils';

type IconSeparation = 'none' | 'sm' | 'md'
interface TitleProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    content: string;
    icon?: IconProp | null;
    iconSeparation?: IconSeparation;
    color?: 'primary' | 'secondary' | 'dark' | 'light' | 'fg',
    attributes?: {
        title?: string
        style?: Style
        className?: string
    }
    onClick?: () => void;
}

export const Title = ({
    size = 'md',
    content = '...',
    icon = null,
    iconSeparation = 'sm',
    color = 'primary',
    ...props
}: TitleProps): JSX.Element => {
    return (
        <>
            {
                size === 'xs' &&
                <h5 className={`title title-${size} title-${color}`} {...props.attributes}>
                    {icon && <FontAwesomeIcon icon={icon} className={`icon icon-separation-${iconSeparation}`} />}
                    {content}
                </h5>
            }
            {
                size === 'sm' &&
                <h4 className={`title title-${size} title-${color}`} {...props.attributes}>
                    {icon && <FontAwesomeIcon icon={icon} className={`icon icon-separation-${iconSeparation}`} />}
                    {content}
                </h4>
            }
            {
                size === 'md' &&
                <h3 className={`title title-${size} title-${color}`} {...props.attributes}>
                    {icon && <FontAwesomeIcon icon={icon} className={`icon icon-separation-${iconSeparation}`} />}
                    {content}
                </h3>
            }
            {
                size === 'lg' &&
                <h2 className={`title title-${size} title-${color}`} {...props.attributes}>
                    {icon && <FontAwesomeIcon icon={icon} className={`icon icon-separation-${iconSeparation}`} />}
                    {content}
                </h2>
            }
            {
                size === 'xl' &&
                <h1 className={`title title-${size} title-${color}`} {...props.attributes}>
                    {icon && <FontAwesomeIcon icon={icon} className={`icon icon-separation-${iconSeparation}`} />}
                    {content}
                </h1>
            }
        </>
    );
};
