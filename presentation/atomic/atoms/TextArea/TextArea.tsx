import React, { ChangeEvent, useEffect, useState } from 'react';
import { Style } from '../../../utils/interfaces.utils';

import './TextArea.scss';

export type InputStatus = 'default' | 'success' | 'error' | 'disable'

interface TextAreaProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    state: InputStatus
    setState: React.Dispatch<React.SetStateAction<InputStatus>>
    labelValue?: string
    size?: 'sm' | 'md' | 'lg';
    required?: boolean
    pattern?: string,
    attributes?: {
        id?: string;
        name?: string;
        placeholder?: string;
        style?: Style;
        className?: string
    }
    events?: {
        onClick?: () => void,
        onkeydown?: () => void
    }
}

export const TextArea = ({
    value = '',
    state = 'default',
    labelValue = '',
    size = 'md',
    required = true,
    pattern = '',
    ...props
}: TextAreaProps): JSX.Element => {
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        if (isDefaultValue()) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const isValid = () => { return new RegExp(pattern).test(value) }

    const isDefaultValue = () => { return !isTouched && !value }

    const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(e.target.value)
    }

    return (
        <div className="text-area">
            {labelValue && <div className={`text-area--label text-area--label-${size}`}>
                <label>{labelValue}</label>
                {required && <span> *</span>}
            </div>}
            {state !== 'disable' &&
                <textarea
                    value={value}
                    className={`text-area--element text-area--element-${size} text-area--element-${state}`}
                    autoComplete={'off'}
                    onChange={(e) => onChangeInput(e)}
                    onFocus={() => setIsTouched(true)}
                    {...props.attributes}
                    {...props.events}
                />
            }
            {state === 'disable' &&
                <div className={`input-disable input-${size}`}>{value}</div>}
        </div>
    );
};
