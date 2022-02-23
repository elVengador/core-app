import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { IconButton } from '../../atoms/IconButton/IconButton';

import './Alert.scss';

export type SelectOption = { label: string, value: string }

interface AlertProps {
    value: string | null
    type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR',
    timeToDestroyInSeconds: number,
    autodestroy: () => void
}

export const Alert = ({
    value = '',
    type = 'INFO',
    timeToDestroyInSeconds: showInSeconds = 5,
    ...props
}: AlertProps): JSX.Element => {

    useEffect(() => {
        setTimeout(() => props.autodestroy(), showInSeconds * 1000)
        console.log('set time out');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getColorFromAlert = () => {
        return { background: `var(--${type.toLowerCase()})` }
    }

    return (
        <div className="alert">
            <div className={`alert--icon`} style={getColorFromAlert()}>
                <div className={`alert--icon__${type.toLocaleLowerCase()}`}>
                    {type === 'INFO' && <FontAwesomeIcon icon="info" />}
                    {type === 'SUCCESS' && <FontAwesomeIcon icon="check" />}
                    {type === 'WARNING' && <FontAwesomeIcon icon="exclamation" />}
                    {type === 'ERROR' && <FontAwesomeIcon icon="bug" />}
                </div>
            </div>
            <div className="alert--message">{value}</div>
            <div className="alert--actions">
                <IconButton
                    icon="times"
                    attributes={{ title: "Close alert" }}
                    color="fg"
                    events={{ onClick: () => props.autodestroy() }}
                />
            </div>
        </div>
    );
};
