import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea, InputStatus } from './TextArea';

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
    size: 'md'
};

export const WithPattern = Template.bind({});
WithPattern.args = {
    size: 'md',
    pattern: '^[A-Z]{5}$'
};
