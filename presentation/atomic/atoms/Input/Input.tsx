import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputStatus, Style } from '../../../utils/interfaces.utils';

import './Input.scss';

interface InputProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    state: InputStatus,
    setState: React.Dispatch<React.SetStateAction<InputStatus>>,
    labelValue?: string
    size?: 'sm' | 'md' | 'lg';
    required?: boolean
    pattern?: string,
    type?: 'text' | 'date' | 'password';
    attributes: {
        id: string;
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

export const Input = ({
    labelValue = '',
    size = 'md',
    required = true,
    pattern = '',
    type = 'text',
    ...props
}: InputProps): JSX.Element => {
    // const [value, setValue] = useState(initialValue)
    // const [state, setState] = useState<InputStatus>(initialState)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        if (props.state === 'disable') { return }
        if (isDefaultValue() || !pattern) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value])

    const isValid = () => { return new RegExp(pattern).test(props.value) }

    const isDefaultValue = () => { return !props.value && !isTouched }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value)
        if (isDefaultValue()) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
    }

    return (
        <div className="input">
            {labelValue && <div className={`input--label input--label-${size}`}>
                <label htmlFor={props.attributes.id}>{labelValue}</label>
                {required && <span> *</span>}
            </div>}
            {props.state !== 'disable' &&
                <input
                    value={props.value}
                    type={type}
                    className={`input--element input--element-${size} input--element-${props.state}`}
                    autoComplete='off'
                    onChange={(e) => onChangeInput(e)}
                    onFocus={() => setIsTouched(true)}
                    {...props.attributes}
                    {...props.events}
                >
                </input>
            }
            {props.state === 'disable' &&
                <div className={`input--element-disable input-${size}`}>{props.value}</div>}
        </div>
    );
};
