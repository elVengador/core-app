import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputStatus, Style } from '../../../utils/interfaces.utils';

import './Input.scss';

interface InputProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    state: InputStatus
    setState: React.Dispatch<React.SetStateAction<InputStatus>>
    labelValue?: string
    size?: 'sm' | 'md' | 'lg';
    required?: boolean
    pattern?: string,
    type?: 'text' | 'date' | 'password';
    borderRadius?: {
        topLeft: 'none' | 'sm' | 'md' | 'lg',
        topRight: 'none' | 'sm' | 'md' | 'lg',
        bottomRight: 'none' | 'sm' | 'md' | 'lg',
        bottomLeft: 'none' | 'sm' | 'md' | 'lg'
    }
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

export const Input = ({
    value = '',
    state = 'default',
    labelValue = '',
    size = 'md',
    required = true,
    pattern = '',
    type = 'text',
    borderRadius = {
        topLeft: 'sm',
        topRight: 'sm',
        bottomRight: 'sm',
        bottomLeft: 'sm'
    },
    ...props
}: InputProps): JSX.Element => {
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        if (isDefaultValue() || !pattern) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const borderRadiusClass = () => {
        const topLeftClass = `border-top-left-radius--${borderRadius.topLeft}`
        const topRightClass = `border-top-right-radius--${borderRadius.topRight}`
        const bottomRightClass = `border-bottom-right-radius--${borderRadius.bottomRight}`
        const bottomLeftClass = `border-bottom-left-radius--${borderRadius.bottomLeft}`
        return `${topLeftClass} ${topRightClass} ${bottomRightClass} ${bottomLeftClass}`
    }

    const isValid = () => { return new RegExp(pattern).test(value) }

    const isDefaultValue = () => { return !value && !isTouched }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value)
        if (isDefaultValue()) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
    }

    return (
        <div className="input">
            {labelValue && <div className={`input--label input--label-${size}`}>
                <label>{labelValue}</label>
                {required && <span> *</span>}
            </div>}
            {state !== 'disable' &&
                <input
                    value={value}
                    type={type}
                    className={`input--element input--element-${size} input--element-${state} ${borderRadiusClass()}`}
                    autoComplete={'off'}
                    onChange={(e) => onChangeInput(e)}
                    onFocus={() => setIsTouched(true)}
                    {...props.attributes}
                    {...props.events}
                >
                </input>
            }
            {state === 'disable' &&
                <div className={`input-disable input-${size}`}>{value}</div>}
        </div>
    );
};
