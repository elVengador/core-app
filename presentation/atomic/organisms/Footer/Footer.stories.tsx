import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer2 } from './Footer';

export default {
    title: 'Desing System/Organisims/Footer2',
    component: Footer2,
} as ComponentMeta<typeof Footer2>;

const Template: ComponentStory<typeof Footer2> = (args) => <Footer2 {...args} />;

export const Default = Template.bind({});
Default.args = {
    elementOptions: <div>This is the footer</div>
};
