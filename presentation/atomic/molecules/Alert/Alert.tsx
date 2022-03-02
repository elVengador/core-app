import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useRef } from 'react';
import { AlertTypes } from '../../../utils/interfaces.utils';
import { IconButton } from '../../atoms/IconButton/IconButton';

import './Alert.scss';

export type SelectOption = { label: string, value: string }

interface AlertProps {
    value: string
    type: AlertTypes,
    timeToDestroy?: number,
    autodestroy: () => void
}

// const useTimeout = (callback: () => void, delay: number) => {
//     const savedCallback = useRef(callback)
//     useEffect(() => {
//         savedCallback.current = callback
//     }, [callback])

//     useEffect(() => {
//         if (delay === null) { return }
//         const id = setTimeout(() => savedCallback.current(), delay)
//         return () => clearTimeout(id)
//     }, [delay])
// }

const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef(callback);

    useEffect(() => { savedCallback.current = callback; });

    useEffect(() => {
        if (delay === null) { return }
        const intervalId = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(intervalId);
    }, [delay]);
}

export const Alert = ({
    value = '',
    type = 'INFO',
    timeToDestroy = 5000,
    ...props
}: AlertProps): JSX.Element => {

    const TICK_IN_MILISECONDS = 1000
    const currentTimeInMiliSeconds = useRef(0)

    const updateTickCallback = useCallback(() => {
        currentTimeInMiliSeconds.current += TICK_IN_MILISECONDS
        if (currentTimeInMiliSeconds.current >= timeToDestroy) {
            props.autodestroy()
        }
    }, [props, timeToDestroy])

    useInterval(updateTickCallback, TICK_IN_MILISECONDS)

    const getColorFromAlert = () => ({ background: `var(--${type.toLowerCase()})` })

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
                    events={{ onClick: props.autodestroy }}
                />
            </div>
        </div>
    );
};
