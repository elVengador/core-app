import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import { InputStatus } from '../../../utils/interfaces.utils';

export default {
    title: 'Desing System/Atoms/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return <Input
        {...args}
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

export const Disable = Template.bind({});
Disable.args = {
    // initialValue: 'this input is disabled',
    // initialState: 'disable',
    labelValue: 'Disable input',
    size: 'md',
    attributes: { id: 'disabled-input', placeholder: 'you cant write here' },
    pattern: '^[A-Z]{5}$'
};
