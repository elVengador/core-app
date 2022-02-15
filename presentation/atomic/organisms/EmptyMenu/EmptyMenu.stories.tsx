import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmptyMenu } from './EmptyMenu';

export default {
    title: 'Desing System/Organisims/Menu',
    component: EmptyMenu,
} as ComponentMeta<typeof EmptyMenu>;

const Template: ComponentStory<typeof EmptyMenu> = (args) => <EmptyMenu {...args} />;

export const Default = Template.bind({});
// Default.args = {
//     title: 'Titulo del Formulario'
// };
