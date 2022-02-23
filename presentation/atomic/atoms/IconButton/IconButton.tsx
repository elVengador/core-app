import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './IconButton.scss';
import { Style } from '../../../utils/interfaces.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconButtonProps {
    icon: IconProp;
    state?: 'enable' | 'disable';
    color?: 'primary' | 'secondary' | 'dark' | 'light' | 'fg' | 'bg'
    attributes: {
        style?: Style;
        className?: string;
        title: string;
    }
    events?: {
        onClick?: () => void,
        onkeydown?: () => void
    }
}

export const IconButton = ({
    state = 'enable',
    color = 'primary',
    ...props
}: IconButtonProps): JSX.Element => {

    return (
        <button
            type='button'
            className={`icon-btn icon-btn--${state} icon-btn--${state}__${color}`}
            {...props.attributes}
            {...props.events}
            aria-label={props.attributes.title}
        >
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
        </button>
    );
};
