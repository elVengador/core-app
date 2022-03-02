import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Button.scss';
import { Style } from '../../../utils/interfaces.utils';

interface ButtonProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    icon?: IconProp | null;
    content: string;
    color?: 'primary' | 'secondary' | 'light' | 'dark'
    disabled?: boolean;
    borderRadius?: {
        topLeft: 'none' | 'sm' | 'md' | 'lg',
        topRight: 'none' | 'sm' | 'md' | 'lg',
        bottomRight: 'none' | 'sm' | 'md' | 'lg',
        bottomLeft: 'none' | 'sm' | 'md' | 'lg'
    }
    attributes?: {
        style?: Style;
        className?: string;
        title?: string;
        type?: 'button' | 'submit'
    }
    events?: {
        onClick?: () => void,
        onkeydown?: () => void
    }
}

export const Button = ({
    size = 'md',
    content = '...',
    icon = null,
    color = 'primary',
    disabled = false,
    borderRadius = {
        topLeft: 'sm',
        topRight: 'sm',
        bottomRight: 'sm',
        bottomLeft: 'sm'
    },
    attributes = {
        type: 'button'
    },
    ...props
}: ButtonProps): JSX.Element => {

    const borderRadiusClass = () => {
        const topLeftClass = `btn--border-top-left-radius--${borderRadius.topLeft}`
        const topRightClass = `btn--border-top-right-radius--${borderRadius.topRight}`
        const bottomRightClass = `btn--border-bottom-right-radius--${borderRadius.bottomRight}`
        const bottomLeftClass = `btn--border-bottom-left-radius--${borderRadius.bottomLeft}`
        return `${topLeftClass} ${topRightClass} ${bottomRightClass} ${bottomLeftClass}`
    }

    const classStateSufix = disabled ? '__disabled' : ''

    return (
        <button
            type={attributes?.type}
            className={`btn btn--${size} btn--${color}${classStateSufix} ${borderRadiusClass()}`}
            {...attributes}
            {...props.events}
            disabled={disabled}
        >
            {icon && <FontAwesomeIcon icon={icon} className={content ? "mr-sm" : ""} />}
            {content}
        </button>
    );
};
