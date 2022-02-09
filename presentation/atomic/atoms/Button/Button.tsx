import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Button.scss';
import { Style } from '../../../utils/interfaces.utils';

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    icon?: IconProp | null;
    content: string;
    type?: 'normal' | 'alpha';
    state?: 'enable' | 'disable';
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
    type = 'normal',
    state = 'enable',
    borderRadius = {
        topLeft: 'sm',
        topRight: 'sm',
        bottomRight: 'sm',
        bottomLeft: 'sm'
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

    return (
        <button
            type="button"
            className={`btn btn-${state} btn-${size} btn-${type} text-${size} ${borderRadiusClass()}`}
            {...props.attributes}
            {...props.events}
        >
            {icon && <FontAwesomeIcon icon={icon} className={content ? "mr-sm" : ""} />}
            {content}
        </button>
    );
};
