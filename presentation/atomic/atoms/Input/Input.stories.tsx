import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
// import { InputStatus } from '../../../utils/interfaces.utils';
import { useInput } from '../../../utils/hooks/useInput';

export default {
    title: 'Desing System/Atoms/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue, state, setState] = useInput()
    return <Input
        {...args}
        value={value}
        setValue={setValue}
        state={state}
        setState={setState}
    />;
}

export const Default = Template.bind({});
Default.args = {
    labelValue: 'Name',
    size: 'md',
    attributes: { id: 'default-input', placeholder: 'Write here' }
};

export const WithPattern = Template.bind({});
WithPattern.args = {
    labelValue: 'Name',
    size: 'md',
    attributes: { id: 'input-with-pattern', placeholder: 'with this pattern ^[A-Z]{5}$' },
    pattern: '^[A-Z]{5}$'
};

// export const Disable = Template.bind({});
// Disable.args = {
//     labelValue: 'Disable input',
//     size: 'md',
//     attributes: { id: 'disabled-input', placeholder: 'you cant write here' },
//     pattern: '^[A-Z]{5}$',
//     state: 'disable'
// };
