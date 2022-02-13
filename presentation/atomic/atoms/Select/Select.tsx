import React, { useEffect, useState } from 'react';
import { Style } from '../../../utils/interfaces.utils';
import { Button } from '../Button/Button';

import './Select.scss';

export type InputStatus = 'default' | 'success' | 'error' | 'disable'
export type SelectOption = { label: string, value: string }

interface SelectProps {
    value: string | null
    setValue: React.Dispatch<React.SetStateAction<string>>
    state: InputStatus
    setState: React.Dispatch<React.SetStateAction<InputStatus>>
    labelValue?: string
    options: SelectOption[]
    size?: 'sm' | 'md' | 'lg';
    required?: boolean
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

export const Select = ({
    value = '',
    state = 'default',
    labelValue = '',
    size = 'md',
    required = true,
    ...props
}: SelectProps): JSX.Element => {
    const [currentLabel, setCurrentLabel] = useState('')
    const [searchText, setSearchText] = useState('')
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([])
    const [canShowOptions, setCanShowOptions] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        const optionSelected = props.options.find(cur => cur.value === value)
        if (!optionSelected) { return reset() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isDefaultValue()) { return props.setState('default') }
        if (isValid()) { return props.setState('success') }
        return props.setState('error')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        const currentFilteredOptions = searchText ? props.options.filter(cur => cur.label.includes(searchText)) : props.options
        setFilteredOptions(currentFilteredOptions)
    }, [props.options, searchText])

    const reset = () => {
        setCurrentLabel('')
        props.setValue('')
    }

    const isValid = () => { return value && currentLabel }

    const isDefaultValue = () => { return !value && !isTouched }

    const onChangeOption = (option: SelectOption) => {
        props.setValue(option.value)
        setCurrentLabel(option.label)
        setSearchText('')
        setCanShowOptions(false)
    }

    const buildFilterOptions = () => {
        return filteredOptions.map((cur, idx) => <div
            className='options--item'
            // onClick={() => onChangeOption(cur)}
            onMouseDown={() => onChangeOption(cur)}
            key={idx}
        >
            {cur.label}
        </div>)
    }

    const onEscDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') { e.currentTarget.blur(); setSearchText('') }
    }

    return (
        <div className="select">
            {labelValue && <div className={`select--label select--label-${size}`}>
                <label>{labelValue}</label>
                {required && <span> *</span>}
            </div>}
            {state !== 'disable' &&
                <div
                    className={`select-element select-element-${state}`}
                    style={{
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: canShowOptions ? '0px' : '10px',
                        borderBottomRightRadius: canShowOptions ? '0px' : '10px',
                    }}
                >
                    <div className={`item-selected item-selected-${state}`}>
                        <input
                            className='item-selected--input'
                            value={searchText}
                            placeholder={currentLabel}
                            onChange={(e) => setSearchText(e.target.value)}
                            onFocus={() => { setIsTouched(true); setCanShowOptions(true) }}
                            onBlur={() => { setCanShowOptions(false) }}
                            onKeyDown={(e) => { onEscDown(e) }}
                            style={{
                                borderTopLeftRadius: '10px',
                                borderBottomLeftRadius: canShowOptions ? '0px' : '10px',
                            }}
                        />
                        {
                            !canShowOptions && <Button
                                content=''
                                icon='caret-down'
                                size='sm'
                                type='alpha'
                                borderRadius={{ topLeft: 'none', topRight: 'sm', bottomRight: 'sm', bottomLeft: 'none', }}
                                events={{ onClick: () => setCanShowOptions(true) }}
                                attributes={{ style: { marginLeft: '-30px' } }}
                            />
                        }
                        {
                            canShowOptions && <Button
                                content=''
                                icon='times'
                                size='sm'
                                type='alpha'
                                borderRadius={{ topLeft: 'none', topRight: 'sm', bottomRight: 'none', bottomLeft: 'none', }}
                                events={{ onClick: () => setCanShowOptions(false) }}
                                attributes={{ style: { marginLeft: '-30px' } }}
                            />
                        }
                    </div>
                    {
                        canShowOptions && <div className='options'>
                            {buildFilterOptions()}
                        </div>
                    }
                </div>
            }
            {state === 'disable' &&
                <div className={`select-disable select-${size}`}>{value}</div>
            }
        </div>
    );
};
