import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Desing System/Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'md',
    content: 'Default Button',
};

export const Disable = Template.bind({});
Disable.args = {
    size: 'md',
    disabled: true,
    content: 'Disable Button'
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    size: 'md',
    content: 'Button with Icon',
    icon: 'coffee'
};
