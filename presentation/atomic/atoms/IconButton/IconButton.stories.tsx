import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { IconButton } from './IconButton';

export default {
    title: 'Desing System/Atoms/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: "upload",
    color: 'fg',
    attributes: { title: 'Upload File' }
};

Default.play = async ({ args, canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    // await userEvent.type(, 'email@provider.com', {
    //     delay: 100,
    // });
    // await userEvent.type(canvas.getByTestId('password'), 'a-random-password', {
    //     delay: 100,
    // });

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByTitle(args.attributes.title));
};
