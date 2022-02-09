import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './Menu';

export default {
    title: 'Desing System/Organisims/Menu',
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Default = Template.bind({});
// Default.args = {
//     title: 'Titulo del Formulario'
// };
