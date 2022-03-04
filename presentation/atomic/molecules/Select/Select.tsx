import React, { useEffect, useState } from 'react';
import { InputStatus, Style } from '../../../utils/interfaces.utils';
import { IconButton } from '../../atoms/IconButton/IconButton';

import './Select.scss';

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
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(props.options)
    const [canShowOptions, setCanShowOptions] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        const getCurrentLabelFromValue = () => {
            const optionFinded = props.options.find(cur => cur.value === value)
            if (!optionFinded) { return '' }
            return optionFinded.label
        }

        const setSelectState = (labelFinded: string) => {
            const isDefaultValue = !value && !isTouched
            const isValid = value && labelFinded

            if (isDefaultValue) { return props.setState('default') }
            if (isValid) { return props.setState('success') }
            return props.setState('error')
        }

        const labelFinded = getCurrentLabelFromValue()
        setCurrentLabel(labelFinded)
        setSelectState(labelFinded)
        console.log('[select]');
    }, [isTouched, props, props.options, value])

    useEffect(() => {
        const filterOptionBySearchText = (newSearchText: string) => {
            if (!newSearchText) return props.options
            return props.options.filter(cur => cur.label.includes(newSearchText))
        }

        const optionsFiltered = filterOptionBySearchText(searchText)
        setFilteredOptions(optionsFiltered)
    }, [props.options, searchText])

    // const isValid = () => { return value && currentLabel }

    // const isDefaultValue = () => { return !value && !isTouched }

    const onChangeOption = (option: SelectOption) => {
        props.setValue(option.value)
        // setCurrentLabel(option.label)
        setSearchText('')
        setCanShowOptions(false)
    }

    const buildFilterOptions = () => {
        return filteredOptions.map((cur, idx) => <div
            className='select-options--item'
            onMouseDown={() => onChangeOption(cur)}
            key={idx}
        >
            {cur.label}
        </div>)
    }

    const onEscDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            e.currentTarget.blur();
            setSearchText('')
        }
    }

    const onHideOptions = () => {
        console.log('hide');
        setCanShowOptions(false)
        setSearchText('')
    }

    // const filterOptionBySearchText = (newSearchText: string) => {
    //     if (newSearchText) return props.options
    //     return props.options.filter(cur => cur.label.includes(newSearchText))
    // }

    const onChangeSearchText = (newSearchText: string) => {
        setSearchText(newSearchText)
    }

    return (
        <div className="select">
            {labelValue && <div className={`select--label select--label-${size}`}>
                <label htmlFor={props.attributes.id}>{labelValue}</label>
                {required && <span> *</span>}
            </div>}
            {state !== 'disable' &&
                <div
                    className={`select-element select-element-${state}`}
                >
                    <div className={`item-selected item-selected-${state}`}>
                        <input
                            id={props.attributes.id}
                            className='item-selected--input'
                            value={searchText}
                            placeholder={currentLabel}
                            onChange={(e) => onChangeSearchText(e.currentTarget.value)}
                            onFocus={() => { setIsTouched(true); setCanShowOptions(true) }}
                            onBlur={() => { onHideOptions() }}
                            onKeyDown={(e) => { onEscDown(e) }}
                        />
                        {
                            !canShowOptions && <IconButton
                                icon='caret-down'
                                color='fg'
                                events={{ onClick: () => setCanShowOptions(true) }}
                                attributes={{ title: 'Show options' }}
                            />
                        }
                        {
                            canShowOptions && <IconButton
                                icon='times'
                                color='fg'
                                events={{ onClick: () => onHideOptions() }}
                                attributes={{ title: 'Hide options' }}
                            />
                        }
                    </div>
                    {
                        canShowOptions && <div className='select-options'>
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
