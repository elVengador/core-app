import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header2 } from './Header';

export default {
    title: 'Desing System/Organisims/Header',
    component: Header2,
} as ComponentMeta<typeof Header2>;

const Template: ComponentStory<typeof Header2> = (args) => <Header2 {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Titulo del Formulario'
};
