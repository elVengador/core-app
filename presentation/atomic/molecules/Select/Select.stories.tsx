import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { InputStatus } from '../../../utils/interfaces.utils';

export default {
    title: 'Desing System/Molecules/Select',
    component: Select,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<string>('');
    const [state, setState] = useState<InputStatus>('default');

    return <Select
        {...args}
        value={value}
        setValue={setValue}
        state={state}
        setState={setState}
    />;
}

export const Default = Template.bind({});
Default.args = {
    labelValue: 'Seleccione an option',
    options: [
        { label: 'option a', value: '2' },
        { label: 'option b', value: '3' },
        { label: 'option c', value: '4' },
        { label: 'option d', value: '5' },
        { label: 'option e', value: '67' },
    ],
    size: 'md'
};
