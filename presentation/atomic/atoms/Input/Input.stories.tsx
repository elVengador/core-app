import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import { InputStatus } from '../../../utils/interfaces.utils';

export default {
    title: 'Desing System/Atoms/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = useState('');
    const [state, setState] = useState<InputStatus>('default');
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
    size: 'md'
};

export const WithPattern = Template.bind({});
WithPattern.args = {
    size: 'md',
    pattern: '^[A-Z]{5}$'
};
