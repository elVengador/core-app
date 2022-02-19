import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './TextArea';
import { InputStatus } from '../../../utils/interfaces.utils';

export default {
    title: 'Desing System/Atoms/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
    const [value, setValue] = useState('');
    const [state, setState] = useState<InputStatus>('default');

    return <TextArea
        {...args}
        value={value}
        setValue={setValue}
        state={state}
        setState={setState}
    />;
}

export const Default = Template.bind({});
Default.args = {
    label: 'this is a text area',
    size: 'md'
};

export const WithPattern = Template.bind({});
WithPattern.args = {
    label: 'this is a text area with pattent ^[A-Z]{5}$',
    size: 'md',
    pattern: '^[A-Z]{5}$'
};
