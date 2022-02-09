import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem } from './MenuItem';

export default {
    title: 'Desing System/Organisims/MenuItem',
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Home',
    icon: 'home',
    path: '/home'
};
